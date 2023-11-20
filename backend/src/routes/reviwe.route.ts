// Importing packages
import { Router } from 'express';

// Importing controllers
import reviewController from '../controllers/review.controller';

// Defining routers
const router = Router();

// Manual auth routes
router.post('/addReview', reviewController.handleUserReview);

export default router;

