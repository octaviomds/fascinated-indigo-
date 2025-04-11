import { redirect } from 'react-router-dom';
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import ResetPassword from './reset-password/reset-password';
import SetNewPassword from './set-new-password/set-new-password';

export const routes = [
  { index: true, loader: () => redirect('login') },
  { path: 'login', element: <Login />, text: 'Login' },
  { path: 'sign-up', element: <SignUp />, text: 'Sign up' },
  { path: 'reset-password', element: <ResetPassword />, text: 'Reset password' },
  { path: 'set-new-password', element: <SetNewPassword />, text: 'Set new password' }
];
