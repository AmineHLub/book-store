import React from 'react';
import '../../styles/book.css';

const temp = [
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Callins',
    completionPercentage: '64%',
    currentChapter: 'Chapter 17',
    id: 1,
  },
  {
    genre: 'Thriller',
    title: 'The Hunger Games second Ed',
    author: 'Suzanne Callins',
    completionPercentage: '10%',
    currentChapter: 'Chapter 5',
    id: 2,
  },
];

const Book = () => (
  temp.map((el) => (
    <div key={el.id} className="book-container d-flex">
      <div className="general-info d-flex">
        <span className="genre">{el.genre}</span>
        <h3 className="title">{el.title}</h3>
        <span className="author">{el.author}</span>
        <ul className="book-management d-flex">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
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
  ))
);
export default Book;
