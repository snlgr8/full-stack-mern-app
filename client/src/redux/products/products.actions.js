import * as api from '../../services/api';
import * as productActions from '../action.types';

export const addProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(product);
    console.log(data.newProduct);
    dispatch({ type: productActions.ADD_PRODUCT, payload: data.newProduct });
  } catch (error) {
    dispatch({ type: productActions.FAILURE, payload: error });
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    let { data } = await api.fetchProducts();
    dispatch({ type: productActions.FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: productActions.FAILURE, payload: error });
  }
};

export const deleteProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.deleteProduct(product);
    dispatch({ type: productActions.DELETE_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: productActions.FAILURE, payload: error });
  }
};
