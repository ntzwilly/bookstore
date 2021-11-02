import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import BookData from './BookData';
import { addBook } from '../redux/books/books';

const categories = ['Drama', 'Horror', 'Tragedy', 'Gothic'];

const Books = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(categories[0]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleCategory = (event) => setCategory(event.target.value);
  const handleTitle = (event) => setTitle(event.target.value);
  const handleAuthor = (event) => setAuthor(event.target.value);

  const handleSubmit = (event) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory(categories[0]);
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
        <select value={category} onChange={handleCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Books;
