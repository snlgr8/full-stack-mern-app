import React from 'react';
import { Link } from 'react-router-dom';
import './forms.css';
const ForgotPasswordLink = () => {
  return (
    <label htmlFor='password'>
      <Link to='/forgotpassword' className='login-screen__forgotpassword'>
        Forgot Password?
      </Link>
    </label>
  );
};

export default ForgotPasswordLink;
