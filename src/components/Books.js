import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import BookData from './BookData';
import { addBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitle = (event) => setTitle(event.target.value);
  const handleAuthor = (event) => setAuthor(event.target.value);

  const handleSubmit = (event) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    event.preventDefault();
  };

  return (
    <div>
      <BookData />
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleTitle}
          value={title}
          required
        />
        <input
          id="author"
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleAuthor}
          value={author}
          required
        />
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Books;
