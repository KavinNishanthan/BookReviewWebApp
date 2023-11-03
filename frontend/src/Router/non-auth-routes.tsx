// Importing packages
import { lazy } from 'react';

// Importing routes
const RegisterPage = lazy(() => import('../pages/LoginPage'));
const LoginPage = lazy(() => import('../pages/RegisterPage'));

export default [
  {
    name: 'RegisterPage',
    path: '/register',
    component: <RegisterPage />
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: <LoginPage />
  }
];
