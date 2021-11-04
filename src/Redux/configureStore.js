import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import booksReducer from './Books/BookState';

const reducer = combineReducers({ booksReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
