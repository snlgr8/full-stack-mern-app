import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FAILURE,
  DELETE_PRODUCT,
} from '../action.types';

export const products = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case FETCH_PRODUCTS:
      return action.payload;
    case DELETE_PRODUCT:
      return action.payload;
    case FAILURE:
      return action.payload;
    default:
      return state;
  }
};
