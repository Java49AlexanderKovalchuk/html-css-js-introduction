import { showErrorMessage } from "./errorMessage.js";
export class BookForm {
    #formElement;
    #inputElements;
    #dateInputElement;
    #pagesInputElement;
    #dateErrorElement;
    #pagesErrorElement;
    #minPages;
    #maxPages;
    #minDate;
    #maxDate;

    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#dateInputElement = document.getElementById(params.idDateInput);
        this.#pagesInputElement = document.getElementById(params.idPagesInput);
        this.#dateErrorElement = document.getElementById(params.idDateError);
        this.#pagesErrorElement = document.getElementById(params.idPagesError);
        this.#minPages = params.minPages;
        this.#maxPages = params.maxPages;
        this.#minDate = params.minDate;
        this.#maxDate = getMaxDate();
        this.onClose();

    }
    addSubmitHandler(processBookFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submitted");
            const book = Array.from(this.#inputElements).reduce(
                (res, cur) => {
                    res[cur.name] = cur.value;
                    return res;
                }, {}
            )
            console.log(book);
            processBookFun(book);
        })
    }

    onClose() {
        this.#dateInputElement.addEventListener("change", (event) => {
            this.validatePublishingDate(event.target);
        });
        this.#pagesInputElement.addEventListener("change", (event) => {
            this.validatePages(event.target);
        });
    }

    validatePublishingDate(element) {
        const selectedDate = new Date(element.value);
        if (selectedDate < this.#minDate || selectedDate > this.#maxDate) {
            const message = "selected date shouldn't be early 01.01.1980 and later then tomorrow";
            showErrorMessage(element, message, this.#dateErrorElement);
        }
    }

    validatePages(element) {
        const value = +element.value;
        if (value < this.#minPages || value > this.#maxPages) {
            const message = value < this.#minPages ? `pages must be ${this.#minPages} or more`
                : `pages must be ${this.#maxPages} or less`;
            showErrorMessage(element, message, this.#pagesErrorElement);
        }
    }
}

function getMaxDate() {
    return new Date();
}