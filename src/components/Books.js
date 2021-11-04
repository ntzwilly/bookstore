import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import BookData from './BookData';
import { createBook } from '../redux/books/books';
import '../css/Books.css';

const categories = ['Action', 'Science Fiction', 'Economy'];

const Books = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(categories[0]);
  const [title, setTitle] = useState('');

  const handleCategory = (event) => setCategory(event.target.value);
  const handleTitle = (event) => setTitle(event.target.value);

  const handleSubmit = (event) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(createBook(newBook));
    setTitle('');
    setCategory(categories[0]);
    event.preventDefault();
  };

  return (
    <div className="book-container">
      <BookData />
      <hr className="line" />
      <h2 className="add-new">ADD NEW BOOK</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleTitle}
          value={title}
          required
        />
        <select className="select" value={category} onChange={handleCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <input className="submit" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Books;
