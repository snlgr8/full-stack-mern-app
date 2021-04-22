import { combineReducers } from 'redux';
import { user } from './user/user.reducer';
import { products } from './products/product.reducer';
export default combineReducers({
  user,
  products,
});
