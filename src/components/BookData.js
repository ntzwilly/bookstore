import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, loadBooks } from '../redux/books/books';
import Progress from './Progress';

const BookData = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.item_id}>
          <h4>{book.category}</h4>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <Progress progress={book.progress} />
          <div>
            <button type="button">Comments</button>
            <button type="button" onClick={() => dispatch(deleteBook(book.item_id))}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookData;
