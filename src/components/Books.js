import React from 'react';
import BookData from './BookData';

const Books = () => (
  <div>
    <BookData />
    <form>
      <input id="title" type="text" name="title" placeholder="Title" />
      <input id="title" type="text" name="author" placeholder="Author" />
      <input type="submit" value="ADD BOOK" />
    </form>
  </div>
);

export default Books;
