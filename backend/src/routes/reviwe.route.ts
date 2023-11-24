// Importing packages
import { Router } from 'express';

// Importing controllers
import reviewController from '../controllers/review.controller';

// Defining routers
const router = Router();

// Manual auth routes
router.post('/addReview', reviewController.handleUserReview);
router.get('/fetch-review/:bookId', reviewController.fetchReview);
router.get('/fetch-review/user/:userId', reviewController.fetchUserReview);
router.post('/delete-review', reviewController.deleteReview);


export default router;

