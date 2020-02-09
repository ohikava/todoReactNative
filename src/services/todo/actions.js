import {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from './actionsTypes.js';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  payload: id
})
