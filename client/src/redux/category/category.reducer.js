import {
  ADD_CATEGORY,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  FAILURE,
  FETCH_SUBTYPE,
} from '../action.types';

export const categories = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    case ADD_CATEGORY:
      return [...state, action.payload];
    case DELETE_CATEGORY:
      return state.filter((category) => category._id !== action.payload._id);
    case FETCH_SUBTYPE:
      return action.payload;
    case FAILURE:
      return state;
    default:
      return state;
  }
};
