import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AddProduct } from '../../components/Products/product.add';
import { DeleteProduct } from '../../components/Products/product.delete';
import { ProductList } from '../../components/Products/product.list';

export const Products = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};
