import { InputLabel, MenuItem, Select } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/category/category.actions';
import { addProduct } from '../../redux/products/products.actions';
import { Input } from '../Forms/Input';

import './products.css';
const initialState = {
  name: 'Sample',
  brand: 'ABC Brand',
  category: '',
  subtype: '',
  actualPrice: 100,
  boughtPrice: 90,
  image: '',
  rating: '0',
};

export const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const [subtypes, setSubtypes] = useState([]);
  const [isCategorySelected, setIsCategorySelected] = useState(true);
  const { error } = useSelector((state) => ({
    error: state.products.error,
  }));
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => ({
    categories: state.categories.items,
  }));
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const { name, actualPrice, boughtPrice, rating, subtype, category, brand } =
    product;

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
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });
    dispatch(addProduct(formData));
    clearForm();
    event.target.reset();
  };

  const clearForm = () => {
    setProduct(initialState);
    setSubtypes([]);
    setIsCategorySelected(true);
  };

  const getSubtypes = (category) => {
    return categories.find((c) => c.title === category);
  };
  const handleChangeSelect = async (event) => {
    const { name, value } = event.target;
    setIsCategorySelected(!isCategorySelected);
    const fetchedSubtypes = getSubtypes(value);
    setSubtypes(fetchedSubtypes.subtype);
    setProduct({ ...product, [name]: value });
  };

  const handleChange = async (event) => {
    let { name, value } = event.target;
    if (name === 'image') {
      value = event.target.files[0];
    }
    setProduct({ ...product, [name]: value });
  };
  return (
    <>
      <div className='product-screen'>
        <form
          onSubmit={handleSubmit}
          className='product-screen__form'
          name='addProductForm'
        >
          <h3 className='product-screen__title'>Add Product</h3>
          {error && <span className='error-message'>{error}</span>}
          {fields.map((field, index) => (
            <Input
              key={index}
              label={field.title}
              classes='form-group-input'
              type={field.type}
              name={field.name}
              placeholder={field.title}
              handleChange={handleChange}
              value={field.value}
              accept={field?.accept}
            />
          ))}

          <Input
            classes='form-group-input'
            type='file'
            name='image'
            label='Image'
            placeholder='Image'
            handleChange={handleChange}
            accept='image/*'
          />

          <div className='form-group-price'>
            <Input
              type='number'
              label='Actual Price'
              name='actualPrice'
              placeholder='Actual Price'
              handleChange={handleChange}
              value={actualPrice}
              classes='form-group-input'
            />

            <Input
              classes='form-group-input'
              type='number'
              label='Bought Price'
              name='boughtPrice'
              placeholder='Bought Price'
              handleChange={handleChange}
              value={boughtPrice}
            />
          </div>

          <div className='form-group-category'>
            <div className='form-group-product'>
              <InputLabel id='category-select'>Category</InputLabel>
              <Select
                id='category'
                name='category'
                onChange={handleChangeSelect}
                value={category}
              >
                {categories.length > 0 &&
                  categories.map((selectValue, index) => (
                    <MenuItem key={index} value={selectValue.title}>
                      {selectValue.title}
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
                {subtypes.map((selectedValue, index) => (
                  <MenuItem key={index} value={selectedValue}>
                    {selectedValue}
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
    </>
  );
};
