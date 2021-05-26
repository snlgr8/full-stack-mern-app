import { css } from '@emotion/core';
import { Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import { CustomButton } from '../../components/Forms/Button';
import { Product } from '../../components/Products/product';
import { fetchProducts } from '../../redux/products/products.actions';
import './Product.style.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;
export const Products = () => {
  const { isLoading, items, categories } = useSelector((state) => ({
    isLoading: state.products.isLoading,
    items: state.products.items,
    categories: state.categories.items,
  }));

  const color = '#96C5BD';

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
            <Product
              product={{
                ...product,
                category: categories.find((c) =>
                  product.category._id
                    ? c._id === product.category._id
                    : product.category
                ),
              }}
              key={product.id}
            />
          ))}
      </Grid>
    </>
  );
};
