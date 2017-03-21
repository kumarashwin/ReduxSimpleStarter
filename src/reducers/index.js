import { combineReducers } from 'redux';
import weather from './reducer-weather';

const rootReducer = combineReducers({
    weather
});

export default rootReducer;