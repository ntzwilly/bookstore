import React from 'react';

const BookData = () => {
  const BOOKS = [
    {
      id: 1,
      title: 'Family Album',
      author: 'Danielle Steel',
    },
    {
      id: 2,
      title: 'The Shinning',
      author: 'Stephen King',
    },
    {
      id: 3,
      title: 'Wuthering heights',
      author: 'Emily Brontë',
    },
  ];

  return (
    <ul className="book-list">
      {BOOKS.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BookData;
