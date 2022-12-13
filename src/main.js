import { Library } from "./data/library.js";
import { BookForm } from "./ui/BookForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";

const MIN_PAGES = 50;
const MAX_PAGES = 2000;

// get number of days from 1970 to given date for further comparasion 
const BORDER_DAYS = Math.floor(new Date(1980, 0, 1).getTime() / 1000 / 60 / 60 / 24);

const ACTIVE = "active"

const pagesFormErrorElement = document.getElementById("pages_form_error");
const booksListElement = document.getElementById("books-all");
const booksPagesListElement = document.getElementById("books-pages");
const booksAuthorListElement = document.getElementById("books-author");
let author = document.querySelector(".author");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");

//**********************************************************

const library = new Library();

const bookForm = new BookForm({
    idForm: "book_form", idDateInput: "date_input", idPagesInput: "pages_input",
    idDateError: "date_error", idPagesError: "pages_error", minPages: MIN_PAGES, maxPages: MAX_PAGES,
    minTime: BORDER_DAYS
});

bookForm.addSubmitHandler((book) => library.addBook(book));
//console.log('bookForm: ', bookForm);
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

window.onSubmitPages = onSubmitPages;
window.onChangePagesFrom = onChangePagesFrom;
window.onChangePagesTo = onChangePagesTo;
window.onSubmitAuthor = onSubmitAuthor;
window.showSection = showSection;