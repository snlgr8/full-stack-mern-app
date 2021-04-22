import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export const registerUser = (user) =>
  axios.post(`${BASE_URL}/users/register`, user);

export const loginUser = (user) => axios.post(`${BASE_URL}/users/login`, user);
export const getWelcome = () => {
  axios.get(`${BASE_URL}/users`);
};

export const addProduct = (product) => {
  axios.post(`${BASE_URL}/products/addProduct`, product);
};

export const fetchProducts = () =>
  axios.get(`${BASE_URL}/products/getProducts`);
