import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../../redux/user/user.actions';
import './login.css';
export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const [error, setError] = useState('');
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/');
    }
  }, [history]);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //  console.log(userCredentials);
    const userCred = {
      email,
      password,
      role: 'user',
    };
    dispatch(loginUser(userCred, history));
  };
  return (
    <div className='login-screen'>
      <form onSubmit={handleSubmit} className='login-screen__form'>
        <h3 className='login-screen__title'>Login</h3>
        {error && <span className='error-message'>{error}</span>}
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            required
            name='email'
            placeholder='Email address'
            onChange={handleChange}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>
            Password:{' '}
            <Link to='/forgotpassword' className='login-screen__forgotpassword'>
              Forgot Password?
            </Link>
          </label>
          <input
            type='password'
            required
            name='password'
            autoComplete='true'
            placeholder='Enter password'
            onChange={handleChange}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>

        <span className='login-screen__subtext'>
          Don't have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};
