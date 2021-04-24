import {
  ADD_CATEGORY,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  FAILURE,
} from '../action.types';

export const categories = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return state;
    case ADD_CATEGORY:
      return action.payload;
    case DELETE_CATEGORY:
      return action.payload;
    case FAILURE:
      return action.payload;
    default:
      return state;
  }
};
