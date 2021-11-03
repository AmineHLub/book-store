import React from 'react';
import '../styles/addbook.css';

export default function AddBook() {
  return (
    <form action="#">
      <h2 className="adding-span">Add a new book</h2>
      <div className="adding-form d-flex">
        <input className="book-input" />
        <select className="selector">
          <option selected disabled>Categories</option>
        </select>
        <button type="button">ADD BOOK</button>
      </div>
    </form>
  );
}
