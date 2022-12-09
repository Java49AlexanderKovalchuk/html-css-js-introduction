export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.pages = +book.pages;
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getBooksByPages(pagesFrom, pagesTo) {
        return this.books.filter(e => e.pages>= pagesFrom && e.pages < pagesTo);
    }
    getAuthorBooks(author) {
        return this.books.filter(el => el.author == author);
    }
}
