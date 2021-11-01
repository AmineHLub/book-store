/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="main-container">
          <BookList />
        </div>
      </main>
    </>
  );
}

export default App;
