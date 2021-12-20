import { combineReducers } from 'redux';
import posts from './posts';
import titles from './titles';

const rootReducer = combineReducers({ titles: titles, posts: posts });

export default rootReducer;