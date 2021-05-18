import * as api from '../../services/api';
import {
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_FAILED,
} from '../action.types';

export const registerUser = (user, history) => async (dispatch) => {
  await api
    .registerUser(user)
    .then(({ data }) => {
      if (data?.success) {
        history.push('/');
        dispatch({ type: REGISTER_USER, payload: data });
      }
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_USER_FAILED,
        payload: error.response.data.message,
      });
    });
};

export const loginUser = (user, history) => async (dispatch) => {
  await api
    .loginUser(user)
    .then(({ data }) => {
      if (data?.success) {
        history.push('/');
        dispatch({ type: LOGIN_USER, payload: data });
      }
    })
    .catch((err) => {
      if (err.response) {
        dispatch({
          type: LOGIN_USER_FAILED,
          payload: err.response.data.message,
        });
      }
    });
};

export const logoutUser = (history) => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  history.push('/login');
};
