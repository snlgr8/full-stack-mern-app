import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/category/category.actions';
import { fetchProducts } from '../../redux/products/products.actions';
import './Home.style.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className='home-container'>
      <h1>Welcome</h1>
    </div>
  );
};
export default Home;
