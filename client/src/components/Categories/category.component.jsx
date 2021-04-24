import React from "react";
import {
  Container,
  ProductImage,
  ProductName,
  ProductPriceDetails,
  ActualPrice,
  BoughtPrice,
  Savings,
  DeleteIcon,
} from "./categories.styles";

export const Category = ({ category }) => {
  return (
    <Container>
      <ProductName>{category.title}</ProductName>
    </Container>
  );
};
