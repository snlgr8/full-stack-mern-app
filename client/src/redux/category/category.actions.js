import * as api from '../../services/api';
import * as categoryTypes from '../action.types';

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();

    dispatch({ type: categoryTypes.FETCH_CATEGORIES, payload: data });
  } catch (error) {
    dispatch({ type: categoryTypes.FAILURE, payload: error });
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.addCategory(category);
    dispatch({ type: categoryTypes.ADD_CATEGORY, payload: data.category });
  } catch (error) {
    dispatch({ type: categoryTypes.FAILURE, payload: error });
  }
};
export const deleteCategoryAndProducts = (category) => async (dispatch) => {
  try {
    const { data } = await api.deleteCategoryAndProducts(category);
    dispatch({ type: categoryTypes.DELETE_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: categoryTypes.FAILURE, payload: error });
  }
};
export const deleteCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.deleteCategory(category);
    dispatch({ type: categoryTypes.DELETE_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: categoryTypes.FAILURE, payload: error });
  }
};
