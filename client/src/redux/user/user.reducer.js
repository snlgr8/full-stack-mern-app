import {
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGOUT_USER,
  LOGIN_USER_FAILED,
} from '../action.types';

const userState = {
  error: null,
  currentUser: null,
};
export const user = (state = userState, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ ...action.payload })
      );
      return { ...state, currentUser: action.payload, error: null };

    case REGISTER_USER_FAILED:
    case LOGIN_USER_FAILED:
      return { error: action.payload, currentUser: null };

    case LOGOUT_USER:
      localStorage.removeItem('currentUser');
      return { ...state, currentUser: null, error: null };
    default:
      return state;
  }
};
