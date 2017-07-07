import { combineReducers } from 'redux';
import Posts from './posts';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  Posts,
  form
});

export default rootReducer;
