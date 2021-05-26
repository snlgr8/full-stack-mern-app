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
      console.log(action.payload);
      return {
        ...state,
        items: state.items.map((i) =>
          i._id === action.payload._id
            ? { ...i, count: action.payload.count }
            : i
        ),
      };

    case categoryTypes.GET_COUNT:
      // fetch category based on id and update count field
      /**
       *  data = >[
  {
    "id": "60a3c0e4cadfbf4748ef9d15",
    "count": 4
  },
  {
    "id": "60a3cde5cadfbf4748ef9d1a",
    "count": 1
  }
]
      category = {
        all fields , 
        id,
        count : respective count value from data


      }
       * 
       */
      return {
        ...state,
        items: state.items.map((category) => ({
          ...category,
          count: action.payload.find((d) => d.id === category._id).count,
        })),
      };
    default:
      return state;
  }
};
