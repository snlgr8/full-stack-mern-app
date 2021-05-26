import * as api from '../../services/api';
import * as categoryTypes from '../action.types';

export const fetchCategories = () => async (dispatch) => {
  await api
    .fetchCategories()
    .then(({ data }) => {
      dispatch({ type: categoryTypes.FETCH_CATEGORIES, payload: data });
    })
    .catch((error) => {
      dispatch({
        type: categoryTypes.FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const updateCategory = (category) => async (dispatch) => {
  dispatch({ type: categoryTypes.UPDATE_CATEGORY, payload: category });
};

export const addCategory = (category) => async (dispatch) => {
  await api
    .addCategory(category)
    .then(({ data }) => {
      dispatch({ type: categoryTypes.ADD_CATEGORY, payload: data.category });
    })
    .catch((error) => {
      dispatch({
        type: categoryTypes.FAILURE,
        payload: error.response.data.message,
      });
    });
};
export const deleteCategoryAndProducts = (category) => async (dispatch) => {
  await api
    .deleteCategoryAndProducts(category)
    .then(({ data }) => {
      dispatch({ type: categoryTypes.DELETE_CATEGORY, payload: data });
    })
    .catch((error) => {
      dispatch({
        type: categoryTypes.FAILURE,
        payload: error.response.data.message,
      });
    });
};
export const deleteCategory = (category) => async (dispatch) => {
  await api
    .deleteCategory(category)
    .then(({ data }) => {
      dispatch({ type: categoryTypes.DELETE_CATEGORY, payload: data });
    })
    .catch((error) => {
      dispatch({
        type: categoryTypes.FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const getCount = () => async (dispatch) => {
  await api.getCount().then(({ data }) => {
    console.log(data);
    dispatch({ type: categoryTypes.GET_COUNT, payload: data });
  });
};
