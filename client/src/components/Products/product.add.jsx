import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import './products.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../redux/products/products.actions';
const initialState = {
  name: '',
  brand: '',
  category: '',
  subtype: [],
  actualPrice: 0,
  boughtPrice: 0,
  image: '',
  rating: 0,
};

export const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
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
    { name: 'name', title: 'Name', type: 'text', value: name },
    { name: 'brand', title: 'Brand', type: 'text', value: brand },
    { name: 'category', title: 'Category', type: 'text', value: category },
    { name: 'subtype', title: 'Subtype', type: 'text', value: subtype },
    {
      name: 'actualPrice',
      title: 'Actual Price',
      type: 'text',
      value: actualPrice,
    },
    {
      name: 'boughtPrice',
      title: 'Bought Price',
      type: 'text',
      value: boughtPrice,
    },
    { name: 'image', title: 'Image', type: 'text', value: image },
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();
    clearForm();

    dispatch(addProduct(product));
  };

  const clearForm = () => {
    setProduct(initialState);
    setRating(0);
  };
  const handleChange = async (event) => {
    const { name, value } = event.target;
    if (name === 'rating') {
      setRating(value);
    }
    setProduct({ ...product, [name]: value });
    console.log(name, value);
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

        <Rating name='rating' value={rating} onChange={handleChange} />
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </div>
  );
};
