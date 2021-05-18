import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../redux/category/category.actions';
const initialState = {
  title: '',
  icon: undefined,
  subtype: [],
  tags: [],
};

export const AddCategory = () => {
  const [category, setCategory] = useState(initialState);
  const { title, tags, subtype } = category;
  const { error } = useSelector((state) => ({
    error: state.categories.error,
  }));
  const dispatch = useDispatch();

  const handleArrayFormData = (type, category, formData) => {
    const data = category[type];
    data.forEach((item) => formData.append(type, item));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    category.subtype = category.subtype.split(',');
    category.tags = category.tags.split(',');

    Object.keys(category).forEach((key) => {
      if (key === 'tags') {
        handleArrayFormData('tags', category, formData);
      } else if (key === 'subtype') {
        handleArrayFormData('subtype', category, formData);
      } else formData.append(key, category[key]);
    });

    dispatch(addCategory(formData));
    clearForm();
    event.target.reset();
  };
  const clearForm = () => {
    setCategory(initialState);
  };
  const handleChange = async (event) => {
    let { name, value } = event.target;
    if (name === 'icon') {
      //setIcon(event.target.files[0]);
      value = event.target.files[0];
    }
    setCategory({ ...category, [name]: value });
  };

  return (
    <div className='login-screen'>
      <form onSubmit={handleSubmit} className='login-screen__form'>
        <h3 className='login-screen__title'>Add Category</h3>
        {error && <span className='error-message'>{error}</span>}
        <div className='form-group-product'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            required
            name='title'
            placeholder='Title'
            onChange={handleChange}
            value={title}
          />
        </div>

        <div className='form-group-product'>
          <label htmlFor='image'>Image</label>
          <input
            type='file'
            required
            name='icon'
            placeholder='Image'
            onChange={handleChange}
            accept='image/*'
          />
        </div>
        <div className='form-group-product'>
          <label htmlFor='subtype'>Subtype</label>
          <input
            type='text'
            required
            name='subtype'
            placeholder='Subtype'
            onChange={handleChange}
            value={subtype}
          />
        </div>

        <div className='form-group-product'>
          <label htmlFor='tags'>Tags</label>
          <input
            type='text'
            required
            name='tags'
            placeholder='Tags'
            onChange={handleChange}
            value={tags}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </div>
  );
};
