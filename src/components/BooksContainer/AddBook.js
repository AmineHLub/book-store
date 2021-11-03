import React, { useState } from 'react';
import '../styles/addbook.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../Redux/Books/BookState';

export default function AddBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      genre: 'Thriller',
      id: Math.floor(Math.random() * 100), // make sure it's unique
      title,
      author,
      completionPercentage: '0%',
      currentChapter: 'Chapter 0',
    };
    if (title.length > 0 && author.length > 0) { dispatch(addBook(newBook)); }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} action="#">
      <h2 className="adding-span">Add a new book</h2>
      <div className="adding-form d-flex">
        <input className="book-input" placeholder="Title" onChange={(e) => { handleTitleChange(e); }} />
        <input className="book-input" placeholder="Author" onChange={(e) => handleAuthorChange(e)} />
        <select defaultValue="Categories" className="selector">
          <option disabled>Categories</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>ADD BOOK</button>
      </div>
    </form>
  );
}
