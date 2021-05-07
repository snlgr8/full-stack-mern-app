import * as api from '../../services/api';
import {
  FETCH_CATEGORIES,
  FAILURE,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_SUBTYPE,
} from '../action.types';

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();

    dispatch({ type: FETCH_CATEGORIES, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error });
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    await api.addCategory(category);
    dispatch({ type: ADD_CATEGORY, payload: category });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error });
  }
};
export const deleteCategoryAndProducts = (category) => async (dispatch) => {
  try {
    const { data } = await api.deleteCategoryAndProducts(category);
    dispatch({ type: DELETE_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error });
  }
};
export const deleteCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.deleteCategory(category);
    dispatch({ type: DELETE_CATEGORY, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error });
  }
};

export const fetchSubType = (categoryId) => async (dispatch) => {
  try {
    const { data } = await api.fetchSubType(categoryId);
    console.log(data);
    dispatch({ type: FETCH_SUBTYPE, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error });
  }
};
