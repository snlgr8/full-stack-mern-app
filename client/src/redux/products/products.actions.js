import * as api from '../../services/api';
import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FAILURE,
  DELETE_PRODUCT,
} from '../action.types';

export const addProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(product);
    if (data?.success) {
      return dispatch({ type: ADD_PRODUCT, payload: data });
    }
  } catch (error) {
    dispatch({ type: FAILURE, payload: error });
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE, payload: error });
  }
};

export const deleteProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.deleteProduct(product);
    if (data?.success) {
      dispatch({ type: DELETE_PRODUCT, payload: data });
    }
  } catch (error) {
    dispatch({ type: FAILURE, payload: error.message });
  }
};
