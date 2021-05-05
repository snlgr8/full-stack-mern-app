import * as api from '../../services/api';
import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FAILURE,
  DELETE_PRODUCT,
} from '../action.types';

export const addProduct = (product) => async (dispatch) => {
  try {
    await api.addProduct(product);
    dispatch({ type: ADD_PRODUCT, payload: product });
  } catch (error) {
    dispatch({ type: FAILURE });
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    let { data } = await api.fetchProducts();
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log('in errrrrrrrrrrrrr');
    dispatch({ type: FAILURE });
  }
};

export const deleteProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.deleteProduct(product);
    console.log(data);
    dispatch({ type: DELETE_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE });
  }
};
