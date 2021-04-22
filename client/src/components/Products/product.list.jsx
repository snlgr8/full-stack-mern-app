import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/products.actions';
import { Product } from './product.component';
import useStyles from './products.style';
import AddIcon from '@material-ui/icons/Add';
import Add from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
export const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
      <Grid container className={classes.root} spacing={2}>
        {products.length > 0 &&
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </Grid>
    </>
  );
};
