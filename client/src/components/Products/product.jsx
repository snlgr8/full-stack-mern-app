import React from 'react';

import './products.css';
import Rating from '@material-ui/lab/Rating';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/products/products.actions';
import { getImage } from '../../utils/imageDecoding';
import { getCount } from '../../redux/category/category.actions';

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(deleteProduct(product._id));
  };
  const calculateDiscount = () => {
    return product.actualPrice - product.boughtPrice;
  };
  return (
    <div className='product-container'>
      <img
        className='product-container__icon'
        src={getImage(product?.image?.data?.data)}
        alt={product.name}
      ></img>
      <p className='product-container__name'>{product.name}</p>
      <p className='product-container__category'>
        Category: {product.category?.title}
      </p>
      <div className='product-container__price-container'>
        <p className='product-container__actual-price'>
          Actual Price : Rs {product.actualPrice}
        </p>
        <p className='product-container__bought-price'>
          Bought At: Rs {product.boughtPrice}
        </p>
        <p className='product-container__savings'>
          Savings: Rs {calculateDiscount()}
        </p>
      </div>
      <div>
        <Rating name='read-only' value={product.rating} readOnly />
        <DeleteIcon
          color='error'
          className='product-container__delete'
          onClick={() => removeProduct(product)}
        />
      </div>
    </div>
  );
};
