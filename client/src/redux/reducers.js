import { combineReducers } from 'redux';
import { user } from './user/user.reducer';
import { products } from './products/product.reducer';
import { categories } from './category/category.reducer';
export default combineReducers({
  user,
  products,
  categories,
});
