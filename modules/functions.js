const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

export default class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    document.querySelector('.add-book').addEventListener('click', () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (title && author) {
        const newBook = {
          title,
          author,
        };
        bookList.push(newBook);
        localStorage.setItem('bookList', JSON.stringify(bookList));
        this.renderBooks();
      }
    });
  };

  renderBooks = () => {
    if (!bookList.length) {
      document.querySelector('.container').innerHTML = 'No books added';
    } else {
      let markup = '';
      bookList.forEach((elem, index) => {
        markup += `<div class="library-book" style="background-color: ${index % 2 && 'rgb(225, 223, 223)'}">
                  <p class="library-book__title">"${elem.title}"</p> <span> by </span>
                  <p class="library-book__author">${elem.author}</p>    
                  <button type="button" class="remove-btn" id=${index}>Remove</button>
              </div>`;
      });
      document.querySelector('.container').innerHTML = markup;
    }
    const removeBook = () => {
      const removeBtnsEl = [...document.getElementsByClassName('remove-btn')];
      removeBtnsEl.forEach((item) => {
        item.addEventListener('click', (e) => {
          bookList.splice(e.target.id, 1);
          localStorage.setItem('bookList', JSON.stringify(bookList));
          this.renderBooks();
        });
      });
    };
    removeBook();
  };
}
