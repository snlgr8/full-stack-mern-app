import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export const registerUser = (user) => {
  return axios.post(`${BASE_URL}/users/register`, user);
};

export const loginUser = (user) => {
  return axios.post(`${BASE_URL}/users/login`, user);
};

export const addProduct = (product) => {
  return axios.post(`${BASE_URL}/products/addProduct`, product);
};

export const fetchProducts = () => {
  return axios.get(`${BASE_URL}/products`);
};

export const deleteProduct = (product) => {
  return axios.post(`${BASE_URL}/products/deleteProduct`, { _id: product });
};

export const fetchCategories = () => {
  return axios.get(`${BASE_URL}/categories`);
};

export const deleteCategory = (category) => {
  return axios.post(`${BASE_URL}/categories/deleteCategory`, { _id: category });
};

export const deleteCategoryAndProducts = (category) => {
  return axios.post(`${BASE_URL}/categories/deleteCategoryAndProducts`, {
    _id: category,
  });
};
export const addCategory = (category) => {
  return axios.post(`${BASE_URL}/categories/addCategory`, category);
};
