import Library from './modules/functions.js';
import navigation from './modules/navigation.js';
import * as dateTime from './modules/date.js';

const date = document.querySelector('.our-date');
date.innerHTML = `${dateTime.date} ${dateTime.hour}:${dateTime.min}:${dateTime.sec}`;

const awesomeBooks = new Library();
awesomeBooks.addBook();
awesomeBooks.renderBooks();
navigation();