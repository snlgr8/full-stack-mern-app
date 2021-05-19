import * as categoryTypes from '../action.types';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const categories = (state = initialState, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES:
      return { ...state, items: action.payload, error: null };
    case categoryTypes.ADD_CATEGORY:
      return {
        ...state,
        items: state.items.concat(action.payload),
        error: null,
      };
    case categoryTypes.DELETE_CATEGORY:
      return {
        ...state,
        items: state.items.filter(
          (category) => category._id !== action.payload
        ),
        error: null,
      };
    case categoryTypes.FAILURE:
      return { ...state, items: [], error: action.payload };

    case categoryTypes.UPDATE_CATEGORY:
      return {
        ...state,
        items: state.items.map((i) =>
          i._id === action.payload.id
            ? { ...i, count: action.payload.count }
            : i
        ),
      };

    default:
      return state;
  }
};
