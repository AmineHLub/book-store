/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/book.css';
import { removeBook } from '../../../Redux/Books/BookState';

const Book = () => {
  const arrOfBooks = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    arrOfBooks.map((el) => (
      <div key={el.id} className="book-container d-flex">
        <div className="general-info d-flex">
          <span className="genre">{el.genre}</span>
          <h3 className="title">{el.title}</h3>
          <span className="author">{el.author}</span>
          <ul className="book-management d-flex">
            <li><button type="button">Comments</button></li>
            <li><button type="button" onClick={() => handleRemove(el.id)}>Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
        <div className="completion-detail">
          <span className="completion">{el.completionPercentage}</span>
        </div>
        <div className="current-chapter d-flex">
          <span className="current-chapter-span">Current Chapter</span>
          <span className="current-chapter-value">{el.currentChapter}</span>
          <button type="button">Update Changes</button>
        </div>
      </div>
    )));
};
export default Book;
