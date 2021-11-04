import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/book.css';
import { removeBook, fetchPosts } from '../../../Redux/Books/BookState';

const Book = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const ObjOfBooks = useSelector((state) => state.booksReducer);
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  const arrOfIds = Object.keys(ObjOfBooks);
  return (
    arrOfIds.map((el) => {
      const bookInfoObj = {
        id: el,
        genre: ObjOfBooks[el][0].category,
        title: ObjOfBooks[el][0].title,
        author: 'Amin',
        completionPercentage: '0%',
        currentChapter: '0',
      };
      return (
        <div key={el} className="book-container d-flex">
          <div className="general-info d-flex">
            <span className="genre">{bookInfoObj.genre}</span>
            <h3 className="title">{bookInfoObj.title}</h3>
            <span className="author">{bookInfoObj.author}</span>
            <ul className="book-management d-flex">
              <li><button type="button">Comments</button></li>
              <li><button type="button" onClick={() => handleRemove(el)}>Remove</button></li>
              <li><button type="button">Edit</button></li>
            </ul>
          </div>
          <div className="completion-detail">
            <span className="completion">{bookInfoObj.completionPercentage}</span>
          </div>
          <div className="current-chapter d-flex">
            <span className="current-chapter-span">Current Chapter</span>
            <span className="current-chapter-value">{bookInfoObj.currentChapter}</span>
            <button type="button">Update Changes</button>
          </div>
        </div>
      );
    }));
};
export default Book;
