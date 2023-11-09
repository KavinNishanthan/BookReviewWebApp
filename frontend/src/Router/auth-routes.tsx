// Importing packages
import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../pages/HomePage'));
const ReviewPage = lazy(() => import('../pages/ReviewPage'));
const Categories = lazy(() => import('../pages/CategoriesPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const ListOfCategoriesPage = lazy(() => import('../pages/ListOfCategoriesPage'));

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
    path: '/review',
    component: <ReviewPage />
  },
  {
    name: 'ProfilePage',
    path: '/profile',
    component: <ProfilePage />
  },
  {
    name: 'ListOfCategoriesPage',
    path: '/listofcategories',
    component: <ListOfCategoriesPage />
  }
];

export default {
  navigationRouts
};
