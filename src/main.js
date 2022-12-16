import { Library } from "./data/library.js";
import { AuthorForm } from "./ui/AuthorForm.js";
import { BookForm } from "./ui/BookForm.js";
import { BooksList } from "./ui/BooksList.js";
import { PagesForm } from "./ui/PagesForm.js";

const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const minDateString = '1980-01-01';
const ACTIVE = "active";

const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");

const paramsBookForm = {
    idForm: "book_form", idDateInput: "date_input", idPagesInput: "pages_input",
    idDateError: "date_error", idPagesError: "pages_error", minPages: MIN_PAGES, maxPages: MAX_PAGES,
    minDate: new Date(minDateString)
};
const paramsPagesForm = {
    idForm: "pages-form", idPagesFromInput: "pagesFrom", idPagesToInput: "pagesTo",
    idErrorMessage: "pages_form_error"
}

const library = new Library();
const bookForm = new BookForm(paramsBookForm);
const pagesForm = new PagesForm(paramsPagesForm);
const authorForm = new AuthorForm("author-form", "authorName");
const listAllBooks = new BooksList("books-all");
const listBooksByPages = new BooksList("books-pages");
const listBooksByAuthor = new BooksList("books-author");

bookForm.addSubmitHandler((book) => library.addBook(book));

pagesForm.addSubmitHandler(pagesObj => {
    const books = library.getBooksByPages(pagesObj.pagesFrom, pagesObj.pagesTo);
    listBooksByPages.showBooks(books);
});

authorForm.addSubmitHandler(author => {
    const booksByAuthor = library.getAuthorBooks(author);
    listBooksByAuthor.showBooks(booksByAuthor);
})

function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        listAllBooks.showBooks(books);
    }
}

window.showSection = showSection;