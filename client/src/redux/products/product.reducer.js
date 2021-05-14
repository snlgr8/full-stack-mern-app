import * as productActions from '../action.types';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case productActions.FETCH_PRODUCTS_BEGINS:
      return { ...state, isLoading: true, error: null };
    case productActions.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, items: action.payload };

    case productActions.ADD_PRODUCT:
      return { ...state, items: state.items.concat(action.payload) };

    case productActions.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((p) => p._id !== action.payload._id),
      };
    case productActions.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        items: [],
      };
    default:
      return state;
  }
};
