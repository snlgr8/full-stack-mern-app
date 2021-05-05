import React from 'react';
import {
  CategoryName,
  Container,
  CategoryType,
  CategoryIcon,
  CategoryTags,
} from './categories.styles';

export const Category = ({ category }) => {
  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  const getImage = () => {
    var base64Flag = 'data:image/jpeg;base64,';
    var imageStr = arrayBufferToBase64(category.icon?.data?.data);
    var img = base64Flag + imageStr;
    return img;
  };

  return (
    <Container>
      <CategoryName>{category.title}</CategoryName>
      <CategoryIcon src={getImage()} alt={category.icon}></CategoryIcon>
      {category.subtype.map((type) => (
        <CategoryType>{type}</CategoryType>
      ))}
      {category.tags.map((tag) => (
        <CategoryTags>#{tag}</CategoryTags>
      ))}
    </Container>
  );
};
