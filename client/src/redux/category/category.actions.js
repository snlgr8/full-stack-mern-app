import * as api from "../../services/api";
import {
  FETCH_CATEGORIES,
  FAILURE,
  ADD_CATEGORY,
  DELETE_CATEGORY,
} from "../action.types";

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
    const { data } = await api.addCategory(category);
    dispatch({ type: ADD_CATEGORY, payload: data });
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
