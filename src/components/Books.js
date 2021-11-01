import React from 'react';

const Books = () => (
  <div>
    <ul className="Book-list">
      <li>
        <h2>Book 1</h2>
        <button type="button">Remove</button>
      </li>
      <li>
        <h2>Book 2</h2>
        <button type="button">Remove</button>
      </li>
    </ul>
    <form>
      <input id="title" type="text" name="name" />

      <input type="submit" value="ADD BOOK" />
    </form>
  </div>
);

export default Books;
