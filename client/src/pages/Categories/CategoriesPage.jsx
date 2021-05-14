import { Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../redux/category/category.actions';
import { Category } from '../../components/Categories/category';
import useStyles from './Categories.page.styles';
import Add from '@material-ui/icons/Add';
import { fetchProducts } from '../../redux/products/products.actions';

export const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const countOfProductsPerCategory = (category) => {
    //Fetch products based on category
    return (
      products &&
      products.filter(
        (product) =>
          product.category.title.toLowerCase() === category.toLowerCase()
      ).length
    );
  };

  return (
    <>
      <div className={classes.btncontainer}>
        <Link to='/addCategory'>
          <Button
            startIcon={<Add />}
            variant='contained'
            className={classes.addBtn}
          >
            Add Category
          </Button>
        </Link>
      </div>
      <Grid container className={classes.root} spacing={2}>
        {categories.length <= 0 && (
          <Typography variant='h6'>No Categories to display.</Typography>
        )}
        {categories.length > 0 &&
          categories.map((category) => (
            <Category
              category={category}
              key={category.id}
              countOfProducts={countOfProductsPerCategory(category.title)}
            />
          ))}
      </Grid>
    </>
  );
};
