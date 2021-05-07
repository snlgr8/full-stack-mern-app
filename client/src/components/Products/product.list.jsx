import { Button, Grid, Typography } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../redux/category/category.actions';
import { fetchProducts } from '../../redux/products/products.actions';
import { Product } from './product';
import useStyles from './products.style';

const gridData = [
  {
    product: [{}],
    category: '',
  },
];
export const ProductList = () => {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
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

      <Grid container className={classes.root} spacing={2}>
        {products.length <= 0 && (
          <Typography variant='h6'>No Products to display.</Typography>
        )}
        {products.length > 0 &&
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </Grid>
    </>
  );
};
