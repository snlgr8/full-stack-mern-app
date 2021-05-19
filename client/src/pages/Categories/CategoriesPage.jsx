import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../redux/products/products.actions';
import { fetchCategories } from '../../redux/category/category.actions';
import { Category } from '../../components/Categories/category';
import useStyles from './Categories.page.styles';
import { CustomButton } from '../../components/Forms/Button';

export const Categories = () => {
  const { categories } = useSelector((state) => ({
    categories: state.categories.items,
  }));
  const [count, setCount] = useState(0);
  const { products } = useSelector((state) => ({
    products: state.products.items,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchCategories());
    if (products.length < 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  const countOfProductsPerCategory = (category) => {
    //Fetch products based on category
    // TODO: to add count of products in categories
    const count =
      products &&
      products.filter((product) => product.category._id === category._id)
        .length;

    return count;
  };

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
            <Category
              category={{
                ...category,
                count: countOfProductsPerCategory(category),
              }}
              key={category.id}
            />
          ))}
      </Grid>
    </>
  );
};
