import { Button, Grid, Typography } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../redux/category/category.actions';
import { fetchProducts } from '../../redux/products/products.actions';
import { Product } from './product';
import useStyles from './products.style';
import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;
const gridData = [
  {
    product: [{}],
    category: '',
  },
];
export const ProductList = () => {
  const { isLoading, items } = useSelector((state) => ({
    isLoading: state.products.isLoading,
    items: state.products.items,
  }));

  let [color, setColor] = useState('#96C5BD');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const classes = useStyles();
  return (
    <>
      <div className={classes.btncontainer}>
        <Link to='/addProduct'>
          <Button
            startIcon={<Add />}
            variant='contained'
            className={classes.addBtn}
          >
            Add Product
          </Button>
        </Link>
      </div>
      <BounceLoader
        color={color}
        loading={isLoading}
        css={override}
        size={150}
      />
      <Grid container className={classes.root} spacing={2}>
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
