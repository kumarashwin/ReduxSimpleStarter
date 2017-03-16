import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';
import ActiveBookReducer from './reducer-active-book';

// rootReducer
export default combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});