import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../../redux/user/user.actions';
import { DialogComponent } from '../Dialog/Dialog.component';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
export const Register = () => {
  const [userProfileDetails, setUserProfileDetails] = useState(initialState);
  const history = useHistory();
  const { displayName, email, password, confirmPassword } = userProfileDetails;
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserProfileDetails({ ...userProfileDetails, [name]: value });
  };

  const clear = () => {
    setUserProfileDetails({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords dont match');
      <DialogComponent message='Passwords do not match' isClicked={true} />;
      return;
    }
    // const { name, email, password, username } = userCredentials;
    const userProfile = {
      name: displayName,
      email,
      password,
    };
    dispatch(registerUser(userProfile, history));
  };
  return (
    <div className='register-screen'>
      <form onSubmit={handleSubmit} className='register-screen__form'>
        <h3 className='register-screen__title'>Register</h3>
        {error && <span className='error-message'>{error}</span>}
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            required
            name='displayName'
            placeholder='Enter Name'
            value={displayName}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            required
            name='email'
            placeholder='Email address'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            required
            name='password'
            autoComplete='true'
            placeholder='Enter password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            type='password'
            required
            name='confirmPassword'
            autoComplete='true'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>

        <span className='register-screen__subtext'>
          Already have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};
