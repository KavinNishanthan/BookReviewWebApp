// Importing packages
import { Router } from 'express';
 
// Importing routes
import authRoute from './auth.route';
import bookRoute from './books.route';
import reviewRoute from './reviwe.route';
 
// Defining router
const router = Router();
 
// Non authorization routes
router.use('/auth', authRoute);
 
// Authorization routes
router.use('/book', bookRoute);
router.use('/review', reviewRoute);

export default router;
