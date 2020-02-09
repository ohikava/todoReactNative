import {CHANGE_FILTER, FILTERS} from './actionsTypes.js';

const initialState = {
  filter: FILTERS.ALL
};

const filterReducer = (state=initialState, action) => {
  switch(action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
