import {
  contactLink, listOfBooks, booksection, listLink, contactSection, addNewLink, titleBookOne,
} from './variables.js';

const navigation = () => {
  listLink.addEventListener('click', (e) => {
    e.preventDefault();
    titleBookOne.style.display = 'block';
    listOfBooks.style.display = 'block';
    contactSection.style.display = 'none';
    booksection.style.display = 'none';
  });

  addNewLink.addEventListener('click', (e) => {
    e.preventDefault();
    booksection.style.display = 'block';
    listOfBooks.style.display = 'none';
    contactSection.style.display = 'none';
    titleBookOne.style.display = 'none';
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    booksection.style.display = 'none';
    listOfBooks.style.display = 'none';
    contactSection.style.display = 'block';
    titleBookOne.style.display = 'none';
  });
};

export default navigation;
