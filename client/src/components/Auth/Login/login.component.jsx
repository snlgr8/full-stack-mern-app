import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../../redux/user/user.actions';
import ForgotPasswordLink from '../../Forms/ForgotPasswordLink';
import { Input } from '../../Forms/Input';
import './login.css';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => ({
    error: state.user.error,
  }));
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  //const [error, setError] = useState('');

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
    const userCred = {
      email,
      password,
      role: 'user',
    };
    dispatch(loginUser(userCred, history));
  };

  const EmailInput = {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    value: email,
    handleChange: handleChange,
    label: 'Email',
    classes: 'form-group',
  };

  const PasswordInut = {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    value: password,
    handleChange: handleChange,
    label: 'Password',
    classes: 'form-group',
  };

  return (
    <div className='login-screen'>
      <form onSubmit={handleSubmit} className='login-screen__form'>
        <h3 className='login-screen__title'>Login</h3>
        {error && <span className='error-message'>{error}</span>}

        <Input {...EmailInput} />

        <Input {...PasswordInut}>
          <ForgotPasswordLink />
        </Input>

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
