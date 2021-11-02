// import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookData = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BookData;
