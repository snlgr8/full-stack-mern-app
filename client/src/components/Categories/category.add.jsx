import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../redux/category/category.actions';
const initialState = {
  title: '',
  icon: '',
  subtype: [],
  tags: [],
};

export const AddCategory = () => {
  const [category, setCategory] = useState(initialState);
  const { title, icon, tags, subtype } = category;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    category.subtype = category.subtype.split(',');
    category.tags = category.tags.split(',');
    console.log(category);
    //  dispatch(addCategory(category));
    clearForm();
  };
  const clearForm = () => {
    setCategory(initialState);
  };
  const handleChange = async (event) => {
    const { name, value } = event.target;
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
            placeholder='ImageUrl'
            onChange={handleChange}
            value={icon}
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
