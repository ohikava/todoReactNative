import {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from './actionsTypes.js';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat([action.payload])
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id === action.payload) {
            t.isCompleted = !t.isCompleted;
          }
          return t;
        })
      };
    default:
      return state;
  }
};

export default todoReducer;
