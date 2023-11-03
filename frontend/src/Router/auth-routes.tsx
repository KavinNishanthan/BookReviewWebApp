// Importing packages
import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../pages/HomePage'));
const ReviewPage = lazy(() => import('../pages/ReviewPage'));
const Categories = lazy(() => import('../pages/CategoriesPage'));

export const navigationRouts = [
  {
    name: 'Home',
    path: '/',
    component: <Home />
  },
  {
    name: 'Categories',
    path: '/categories',
    component: <Categories />
  },
  {
    name: 'ReviewPage',
    path: '/reviewPage',
    component: <ReviewPage />
  }
];

export default {
  navigationRouts
};
