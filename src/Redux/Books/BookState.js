import Axios from 'axios';
import omit from 'object.omit';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_POSTS = 'bookStore/books/GET_POSTS';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cqV2hKEfhqWq3dI8Nmmi/books/';

const initialState = {};

export const addBook = (payload, postPayload) => async (dispatch) => {
  try {
    await Axios.post(baseUrl, postPayload);
    dispatch({
      type: ADD_BOOK,
      payload,
    });
  } catch {
    throw Error('Book was not added');
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  await Axios.delete(`${baseUrl}${bookId}`,
    { item_id: bookId });
  dispatch({
    type: REMOVE_BOOK,
    id: bookId,
  });
};

export const fetchPosts = () => async (dispatch) => {
  const response = await Axios.get(baseUrl);
  dispatch({
    type: GET_POSTS,
    payload: response.data,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, ...action.payload };
    case REMOVE_BOOK:
      return omit(state, action.id);
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
