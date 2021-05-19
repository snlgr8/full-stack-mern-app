import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteCategory,
  deleteCategoryAndProducts,
  updateCategory,
} from '../../redux/category/category.actions';
import { CustomDialog } from '../../utils/Dialog';
import { getImage } from '../../utils/imageDecoding';

import DeleteIcon from '@material-ui/icons/Delete';

import './category.style.css';
const initialDialogDetailsState = {
  open: false,
  dialogContent: 'Are you sure?',
  dialogTitle: 'Confirm',
  confirmButtonText: 'OK',
  cancelButtonText: 'Cancel',
  maxWidth: 'lg',
};
export const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [isDeleteAll, setIsDeleteAll] = useState(false);

  const [dialogDetails, setDialogDetails] = useState(initialDialogDetailsState);

  useEffect(() => {
    //dispatch(updateCategory(category));
  }, [category, dispatch]);
  const handleClose = () => {
    setDialogDetails({ open: false });
  };
  const joinArray = (data, seperator) => {
    return data.join(seperator);
  };
  const handleDelete = () => {
    if (isDeleteAll) {
      dispatch(deleteCategoryAndProducts(category._id));
    } else {
      dispatch(deleteCategory(category._id));
    }
    handleClose();
  };
  const setDialogData = () => {
    if (category.count < 1) {
      setDialogDetails({
        ...dialogDetails,
        open: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        maxWidth: 'xs',
      });
    } else {
      setDialogDetails({
        ...dialogDetails,
        open: true,
        dialogContent:
          'Cannot remove category, there are products in this category. Do you want to delete ALL products in this category?',
        dialogTitle: 'Warning!',
        confirmButtonText: 'Yes, delete all products',
        maxWidth: 'sm',
      });
      setIsDeleteAll(true);
    }
  };
  return (
    <div className='category-container'>
      <p className='category-container__title'>{category.title}</p>
      <img
        className='category-container__icon'
        src={getImage(category.icon?.data?.data)}
        alt={category.icon}
      ></img>

      <div className='category-container__type'>
        <span>Type:</span>
        <span>
          {typeof category.subtype !== 'string'
            ? joinArray(category.subtype, ',')
            : category.subtype}
        </span>
      </div>

      <div className='category-container__count'>
        {category.count < 1 ? (
          `No Products`
        ) : (
          <p>Number of products: {category.count}</p>
        )}
      </div>
      <div className='category-container__delete'>
        <p className='category-container__tags'>
          #
          {typeof category.tags !== 'string'
            ? joinArray(category.tags, ' #')
            : category.tags}
        </p>
        <DeleteIcon
          style={{
            cursor: 'pointer',
            marginLeft: '1rem',
            marginTop: '0.4rem',
            '&:hover': {
              background: '#efefef',
            },
          }}
          color='error'
          onClick={() => setDialogData()}
        />
      </div>

      <CustomDialog
        handleClose={handleClose}
        handleDelete={handleDelete}
        dialogDetails={dialogDetails}
      ></CustomDialog>
    </div>
  );
};
