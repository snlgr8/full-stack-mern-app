import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchCategories,
  getCount,
} from '../../redux/category/category.actions';
import { fetchProducts } from '../../redux/products/products.actions';
import { ReportsPage } from '../Reports/Reports.Page';
import './Home.style.css';
import { Login } from '../../components/Auth/Login/login.component';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(getCount());
  }, [dispatch]);

  return <div className='home-container'></div>;
};
export default Home;
