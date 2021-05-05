import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import './products.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../redux/products/products.actions';
import { Chip, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import {
  fetchCategories,
  fetchSubType,
} from '../../redux/category/category.actions';
const initialState = {
  name: 'tttttttt001',
  brand: 'ssss',
  category: '',
  subtype: [],
  actualPrice: 100,
  boughtPrice: 90,
  image: '',
  rating: 5,
};

export const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const [subtypes, setSubtypes] = useState([]);
  const [isCategorySelected, setIsCategorySelected] = useState(true);

  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const {
    name,
    actualPrice,
    boughtPrice,
    image,
    subtype,
    category,
    brand,
  } = product;

  const fields = [
    {
      name: 'name',
      title: 'Name',
      type: 'text',
      value: name,
      class: 'form-input-full',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'text',
      value: brand,
      class: 'form-input-full',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'text',
      value: image,
      class: 'form-input-half',
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    clearForm();
    dispatch(addProduct(product));
    dispatch(fetchCategories());
  };

  const clearForm = () => {
    setProduct(initialState);
    setSubtypes([]);
    setRating(0);
    setIsCategorySelected(true);
  };

  const handleChangeSelect = async (event) => {
    const { name, value } = event.target;
    setIsCategorySelected(!isCategorySelected);
    setSubtypes(value.subtype);
    setProduct({ ...product, [name]: value.title });
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    if (name === 'rating') {
      setRating(value);
    }
    setProduct({ ...product, [name]: value });
  };
  return (
    <div className='login-screen'>
      <form onSubmit={handleSubmit} className='login-screen__form'>
        <h3 className='login-screen__title'>Add Product</h3>

        {fields.map((field) => (
          <div className='form-group-product'>
            <label htmlFor={field.name}>{field.title}</label>
            <input
              type={field.type}
              required
              name={field.name}
              placeholder={field.title}
              onChange={handleChange}
              value={field.value}
              tabIndex={1}
            />
          </div>
        ))}

        <div className='form-group-price'>
          <div className='form-group-product'>
            <label htmlFor='actualPrice'>Actual Price</label>
            <input
              type='number'
              required
              name='actualPrice'
              placeholder='Actual Price'
              onChange={handleChange}
              value={actualPrice}
              tabIndex={1}
            />
          </div>

          <div className='form-group-product'>
            <label htmlFor='boughtPrice'>Bought Price</label>
            <input
              type='number'
              required
              name='boughtPrice'
              placeholder='Bought Price'
              onChange={handleChange}
              value={boughtPrice}
              tabIndex={1}
            />
          </div>
        </div>

        <div className='form-group-category'>
          <div className='form-group-product'>
            <InputLabel id='category-select'>Category</InputLabel>
            <Select
              id='category'
              value={category.title}
              name='category'
              onChange={handleChangeSelect}
            >
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category.title}
                  </MenuItem>
                ))}
            </Select>
          </div>

          <div className='form-group-product'>
            <InputLabel id='subtype-select'>Subtype</InputLabel>
            <Select
              id='subtype'
              value={subtype}
              name='subtype'
              onChange={handleChange}
              disabled={isCategorySelected}
            >
              {subtypes.map((subtype, index) => (
                <MenuItem key={index} value={subtype}>
                  {subtype}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <Rating name='rating' value={rating} onChange={handleChange} />
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </div>
  );
};
