import {CHANGE_FILTER} from './actionsTypes.js';

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: filter
  }
}
