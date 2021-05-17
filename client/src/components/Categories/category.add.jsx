import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
  const [icon, setIcon] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    category.subtype = category.subtype.split(',');
    category.tags = category.tags.split(',');
    formData.append('title', category.title);
    formData.append('icon', category.icon);
    category.tags.forEach((tag) => formData.append('tags', tag));
    category.subtype.forEach((subtype) => formData.append('subtype', subtype));
    console.log(formData.getAll('subtype'));
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
      setIcon(event.target.files[0]);
      value = event.target.files[0];
      console.log(value);
    }
    setCategory({ ...category, [name]: value });
  };

  return (
    <div className='login-screen'>
      <form onSubmit={handleSubmit} className='login-screen__form'>
        <h3 className='login-screen__title'>Add Category</h3>

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
