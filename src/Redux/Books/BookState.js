import Axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {};

export const addBook = (payload, postPayload) => async (dispatch) => {
  try {
    await Axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cqV2hKEfhqWq3dI8Nmmi/books', postPayload);
    dispatch({
      type: ADD_BOOK,
      payload,
    });
  } catch {
    throw Error('Book was not added');
  }
};

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  id: bookId,
});

export const fetchPosts = () => async (dispatch) => {
  const response = await Axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cqV2hKEfhqWq3dI8Nmmi/books');
  dispatch({
    type: 'GET_POSTS',
    payload: response.data,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, ...action.payload };
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case 'GET_POSTS':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
