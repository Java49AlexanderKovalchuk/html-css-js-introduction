import { Library } from "./data/library.js";
const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const BORDER_DAYS = Math.floor(new Date(1980, 0, 1).getTime() / 1000 / 60 / 60 / 24);
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const ACTIVE = "active"

const dateErrorElement = document.getElementById("date_error");
const pagesErrorElement = document.getElementById("pages_error");
const pagesFormErrorElement = document.getElementById("pages_form_error");
const booksListElement = document.getElementById("books-all");
const booksPagesListElement = document.getElementById("books-pages");
const booksAuthorListElement = document.getElementById("books-author");
let author = document.querySelector(".author");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */

const library = new Library();

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book);
    library.addBook(book);
}

function onChange(event) {
    if (event.target.name == "pages") {
        validatePages(event.target)
    } 
    else if (event.target.name == "publishing_date") {
        validatePublishingDate(event.target);
    }
}
function validatePages(element) {
    const value = +element.value;
    if (value < MIN_PAGES || value > MAX_PAGES) {
        const message = value < MIN_PAGES ? `pages must be ${MIN_PAGES} or more`
            : `pages must be ${MAX_PAGES} or less`;
        showErrorMessage(element, message, pagesErrorElement);
    }

}
function validatePublishingDate(element) {
    const arStrDate = element.value.split('-');
    let year, month, day;
    [year, month, day] = arStrDate.map(n => +n);  // destructure array
    month -= 1;
    let selectedNumberDays = Math.floor(new Date(year, month, day).getTime() / 1000 / 60 / 60 / 24);
    if (selectedNumberDays < BORDER_DAYS) {
        const message = "selected date shouldn't be early 01.01.1980";
        showErrorMessage(element, message, dateErrorElement);
    }
}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = '';
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

let pagesFrom = 0;
let pagesTo = 0;
function onSubmitPages(event) {
    event.preventDefault();
    const books = library.getBooksByPages(pagesFrom, pagesTo);
    booksPagesListElement.innerHTML = getBookItems(books);
}
function onChangePagesFrom(event) {
    const value = +event.target.value;
    if (pagesTo && value >= pagesTo) {
        showErrorMessage(event.target, "Pages 'from' must be less than Pages 'to'",
            pagesFormErrorElement);
    } else {
        pagesFrom = value;
    }
}
function onChangePagesTo(event) {
    const value = +event.target.value;
    if (pagesFrom && value < pagesFrom) {
        showErrorMessage(event.target, "Pages 'To' must be greater than Pages 'From'",
            pagesFormErrorElement);
    }
    pagesTo = value;
}

function onSubmitAuthor(event) {
    event.preventDefault();
    const books = library.getAuthorBooks(author.value);
    booksAuthorListElement.innerHTML = getBookItems(books);
}

function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }
}

function getBookItems(books) {
    return books.map(e =>
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Title: ${e.book_title} </p>
                 <p class="books-item-paragraph">Author: ${e.author} </p>
                 <p class="books-item-paragraph">Genre: ${e.genre}</p>
                 <p class="books-item-paragraph">Publishing: ${e.publishing_date}</p>
                 <p class="books-item-paragraph">Pages: ${e.pages}</p>
              </div>
          </li>`).join('');
}

window.onSubmit = onSubmit;
window.onChange = onChange;
window.onSubmitPages = onSubmitPages;
window.onChangePagesFrom = onChangePagesFrom;
window.onChangePagesTo = onChangePagesTo;
window.onSubmitAuthor = onSubmitAuthor;
window.showSection = showSection;


