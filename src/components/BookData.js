import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, loadBooks } from '../redux/books/books';
import Progress from './Progress';
import '../css/BookData.css';

const BookData = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li className="book-list-li" key={book.item_id}>
          <div>
            <h4>{book.category}</h4>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <button className="action-button btn-1" type="button">Comments</button>
            <button
              className="action-button btn-2"
              type="button"
              onClick={() => dispatch(deleteBook(book.item_id))}
            >
              Remove
            </button>
            <button className="action-button btn-3" type="button">Edit</button>
          </div>
          <Progress progress={book.progress} />
        </li>
      ))}
    </ul>
  );
};

export default BookData;
