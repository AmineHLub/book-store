import React from 'react';
import BookList from '../BooksContainer/BookList';
import AddBook from '../BooksContainer/AddBook';

const BooksContainer = () => (
  <>
    <section className="book-list-container">
      <BookList />
    </section>
    <section className="adding-containerr">
      <AddBook />
    </section>
  </>
);

export default BooksContainer;
