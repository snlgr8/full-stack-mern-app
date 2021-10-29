import React from 'react';
import { useSelector } from 'react-redux';

const Reporting = () => {
  const { categories, countProducts } = useSelector((state) => ({
    categories: state.categories.items,
    countProducts: state.categories.count,
  }));

  return <div></div>;
};

export default Reporting;
