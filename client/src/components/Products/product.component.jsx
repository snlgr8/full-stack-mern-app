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
  DeleteProductContainer,
} from './products.style';
import Rating from '@material-ui/lab/Rating';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export const Product = ({ product }) => {
  console.log(product.actualPrice);
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
        <DeleteIcon color='error' />
      </ProductRating>
    </Container>
  );
};
