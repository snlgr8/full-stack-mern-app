import * as api from '../../services/api';
import * as productActions from '../action.types';

export const addProduct = (product) => async (dispatch) => {
  await api
    .addProduct(product)
    .then(({ data }) => {
      dispatch({ type: productActions.ADD_PRODUCT, payload: data.newProduct });
    })
    .catch((error) => {
      dispatch({
        type: productActions.PRODUCT_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const fetchProducts = () => async (dispatch) => {
  await api
    .fetchProducts()
    .then(({ data }) => {
      dispatch({ type: productActions.FETCH_PRODUCTS_SUCCESS, payload: data });
    })
    .catch((error) => {
      const message = error.response.data.message;
      dispatch({ type: productActions.FAILURE, payload: message });
    });
};

export const deleteProduct = (product) => async (dispatch) => {
  await api
    .deleteProduct(product)
    .then(({ data }) => {
      dispatch({ type: productActions.DELETE_PRODUCT, payload: data });
    })
    .catch((error) => {
      const message = error.response.data.message;
      dispatch({ type: productActions.FAILURE, payload: message });
    });
};
