import { Grid, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../redux/products/products.actions';
import { Product } from '../../components/Products/product';

import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/core';

import './Product.style.css';
import { CustomButton } from '../../components/Forms/Button';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;
export const Products = () => {
  const { isLoading, items } = useSelector((state) => ({
    isLoading: state.products.isLoading,
    items: state.products.items,
  }));

  let [color, setColor] = useState('#96C5BD');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className='product-container-list'>
        <Link to='/addProduct'>
          <CustomButton text='Add Product' />
        </Link>
      </div>
      <BounceLoader
        color={color}
        loading={isLoading}
        css={override}
        size={150}
      />
      <Grid container className='product-container__root' spacing={2}>
        {items.length <= 0 && (
          <Typography variant='h6'>No Products to display.</Typography>
        )}
        {items.length > 0 &&
          items.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </Grid>
    </>
  );
};
