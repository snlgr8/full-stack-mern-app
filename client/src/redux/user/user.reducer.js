import {
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGOUT_USER,
  LOGIN_USER_FAILED,
} from '../action.types';

export const user = (state = null, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ ...action.payload })
      );
      return { ...state, currentUser: action.payload };

    case REGISTER_USER_FAILED:
    case LOGIN_USER_FAILED:
      return { error: action.payload };

    case LOGOUT_USER:
      localStorage.removeItem('currentUser');
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
