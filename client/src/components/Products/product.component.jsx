import React from 'react';
import {
  Container,
  ProductImage,
  ProductName,
  ProductPriceDetails,
  Savings,
  ActualPrice,
  BoughtPrice,
  ProductRating,
} from './products.style';
import useStyles from './products.style';

import Rating from '@material-ui/lab/Rating';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/products/products.actions';

export const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(deleteProduct(product._id));
  };
  const calculateDiscount = () => {
    return product.actualPrice - product.boughtPrice;
  };
  return (
    <Container>
      <ProductImage src={product.image}></ProductImage>
      <ProductName>{product.name}</ProductName>
      <ProductPriceDetails>
        <ActualPrice>Actual Price : Rs {product.actualPrice}</ActualPrice>
        <BoughtPrice>Bought At: Rs {product.boughtPrice}</BoughtPrice>
        <Savings>Savings: Rs {calculateDiscount()}</Savings>
      </ProductPriceDetails>
      <ProductRating>
        <Rating name='read-only' value={product.rating} readOnly />
        <DeleteIcon
          color='error'
          className={classes.delete}
          onClick={() => removeProduct(product)}
        />
      </ProductRating>
    </Container>
  );
};
