export class BooksList {
    #listElement;
    constructor(idList) {
        this.#listElement = document.getElementById(idList);
    }
    showBooks(books) {
        this.#listElement.innerHTML = getBookItems(books);
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