import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../redux/category/category.actions';
import { Input } from '../Forms/Input';
import './category.style.css';
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
      value = event.target.files[0];
    }
    setCategory({ ...category, [name]: value });
  };

  return (
    <div className='category-screen'>
      <form onSubmit={handleSubmit} className='category-screen__form'>
        <h3 className='category-screen__title'>Add Category</h3>
        {error && <span className='error-message'>{error}</span>}

        <Input
          classes='form-group-input'
          label='Title'
          type='text'
          name='title'
          placeholder='Title'
          handleChange={handleChange}
          value={title}
        />

        <Input
          classes='form-group-input'
          label='Image'
          type='file'
          name='icon'
          placeholder='Image'
          handleChange={handleChange}
          accept='image/*'
        />

        <Input
          classes='form-group-input'
          label='Subtype'
          type='text'
          name='subtype'
          placeholder='Subtype'
          handleChange={handleChange}
          value={subtype}
        />

        <Input
          classes='form-group-input'
          type='text'
          label='Tags'
          name='tags'
          placeholder='Tags'
          handleChange={handleChange}
          value={tags}
        />

        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </div>
  );
};
