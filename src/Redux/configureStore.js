import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './Books/BookState';

const reducer = combineReducers({ booksReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
