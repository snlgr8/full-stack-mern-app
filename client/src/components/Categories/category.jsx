import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteCategory,
  deleteCategoryAndProducts,
} from '../../redux/category/category.actions';
import { CustomDialog } from '../../utils/Dialog';
import { getImage } from '../../utils/imageDecoding';
import {
  CategoryIcon,
  CategoryName,
  CategoryTags,
  CategoryType,
  CategoryTypeContainer,
  Container,
  DeleteCategoryContainer,
  DeleteIconContainer,
  ProductCount,
} from './categories.styles';
const initialDialogDetailsState = {
  open: false,
  dialogContent: 'Are you sure?',
  dialogTitle: 'Confirm',
  confirmButtonText: 'OK',
  cancelButtonText: 'Cancel',
  maxWidth: 'lg',
};
export const Category = ({ category, countOfProducts }) => {
  const dispatch = useDispatch();
  const [isDeleteAll, setIsDeleteAll] = useState(false);

  const [dialogDetails, setDialogDetails] = useState(initialDialogDetailsState);

  const handleClose = () => {
    setDialogDetails({ open: false });
  };
  const joinArray = (data, seperator) => {
    return data.join(seperator);
  };
  const handleDelete = () => {
    if (isDeleteAll) {
      console.log('To delete all');
      dispatch(deleteCategoryAndProducts(category._id));
    } else {
      console.log('To delete single');
      dispatch(deleteCategory(category._id));
    }
    handleClose();
  };
  const removeCategory = (category) => {
    if (countOfProducts < 1) {
      setDialogDetails({
        open: true,
        dialogContent: 'Are you sure?',
        dialogTitle: 'Confirm',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        maxWidth: 'xs',
      });
      // dispatch(deleteCategory(category._id));
    } else {
      setDialogDetails({
        open: true,
        dialogContent:
          'Cannot remove category, there are products in this category. Do you want to delete ALL products in this category?',
        dialogTitle: 'Warning!',
        confirmButtonText: 'Yes, delete all products',
        cancelButtonText: 'Cancel',
        maxWidth: 'sm',
      });
      setIsDeleteAll(true);
    }
  };
  return (
    <Container>
      <CategoryName>{category.title}</CategoryName>
      <CategoryIcon
        src={getImage(category.icon?.data?.data)}
        alt={category.icon}
      ></CategoryIcon>
      <CategoryTypeContainer>
        <p>Type:</p>
        <CategoryType>{joinArray(category.subtype, ',')}</CategoryType>
      </CategoryTypeContainer>

      <ProductCount>
        {countOfProducts < 1 ? (
          `No Products`
        ) : (
          <p>Number of products: {countOfProducts}</p>
        )}
      </ProductCount>
      <DeleteCategoryContainer>
        <CategoryTags>#{joinArray(category.tags, ' #')}</CategoryTags>
        <DeleteIconContainer
          color='error'
          onClick={() => removeCategory(category)}
        />
      </DeleteCategoryContainer>

      <CustomDialog
        handleClose={handleClose}
        handleDelete={handleDelete}
        dialogDetails={dialogDetails}
      ></CustomDialog>
    </Container>
  );
};
