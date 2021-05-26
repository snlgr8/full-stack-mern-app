import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../redux/products/products.actions';
import {
  fetchCategories,
  getCount,
} from '../../redux/category/category.actions';
import { Category } from '../../components/Categories/category';
import useStyles from './Categories.page.styles';
import { CustomButton } from '../../components/Forms/Button';

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => ({
    categories: state.categories.items,
  }));

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCount());
  }, []);

  const classes = useStyles();

  return (
    <>
      <div className={classes.btncontainer}>
        <Link to='/addCategory'>
          <CustomButton text='Add Category' />
        </Link>
      </div>
      <Grid container className={classes.root} spacing={2}>
        {categories.length <= 0 && (
          <Typography variant='h6'>No Categories to display.</Typography>
        )}
        {categories.length > 0 &&
          categories.map((category) => (
            <Category category={category} key={category.id} />
          ))}
      </Grid>
    </>
  );
};
