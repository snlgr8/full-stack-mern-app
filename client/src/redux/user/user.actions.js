import * as api from '../../services/api';
import {
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_FAILED,
} from '../action.types';

export const registerUser = (user, history) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(user);
    if (data?.success) {
      const action = { type: REGISTER_USER, payload: data };
      history.push('/');
      return dispatch(action);
    }
  } catch (error) {
    return dispatch({ type: REGISTER_USER_FAILED, payload: error.message });
  }
};

export const fetchWelcome = () => async (dispatch) => {
  try {
    const { data } = await api.getWelcome();
    return dispatch({ type: 'FETCH_WELCOME', payload: data });
  } catch (error) {}
};

export const loginUser = (user, history) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(user);
    if (data?.success) {
      const action = { type: LOGIN_USER, payload: data };
      history.push('/');
      return dispatch(action);
    }
  } catch (error) {
    return dispatch({ type: LOGIN_USER_FAILED, payload: error.message });
  }
};

export const logoutUser = (history) => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  history.push('/login');
};
