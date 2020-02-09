import {combineReducers} from 'redux';
import todoReducer from './todo/reducer.js';
import filterReducer from './filters/reducer.js';

const RootReducer = combineReducers({
  todoReducer: todoReducer,
  filterReducer: filterReducer
});

export default RootReducer;
