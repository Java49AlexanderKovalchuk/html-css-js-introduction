export class AuthorForm {
    #formElement;
    #inputAuthor;

    constructor(idForm, idAuthorInput) {
        this.#formElement = document.getElementById(idForm);
        this.#inputAuthor = document.getElementById(idAuthorInput);
    }
    addSubmitHandler(processAuthorFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const author = this.#inputAuthor.value;
            processAuthorFun(author);
        })
    }
}