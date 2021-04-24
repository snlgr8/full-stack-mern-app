import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const initialState = {
  title: '',
  image: '',
  tags: [],
};

export const AddCategory = () => {
  const [category, setCategory] = useState(initialState);
  const { title, image, tags } = category;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {};
  const handleChange = async (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
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
            type='text'
            required
            name='image'
            placeholder='ImageUrl'
            onChange={handleChange}
            value={image}
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
