import * as categoryTypes from '../action.types';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const categories = (state = initialState, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES:
      return { ...state, items: action.payload };
    case categoryTypes.ADD_CATEGORY:
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    case categoryTypes.DELETE_CATEGORY:
      return {
        ...state,
        items: state.items.filter(
          (category) => category._id !== action.payload
        ),
      };
    case categoryTypes.FAILURE:
      return { ...state, items: [], error: action.payload };
    default:
      return state;
  }
};
