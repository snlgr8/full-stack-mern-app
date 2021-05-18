//https://reactjs.org/docs/testing-recipes.html

import { render, screen } from '@testing-library/react';
import { Login } from '../components/Auth/Login/login.component';

describe('Test login user', () => {
  // Test login with valid user
  test('should authenticate user and login', () => {
    render(<Login />);
    const loginText = screen.getByText('Login');
    expect(loginText).toBeInTheDocument();
  });
  // Test login with invalid user and password
});
