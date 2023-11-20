// Importing packages
import { Router } from 'express';

// Importing controllers
import bookController from '../controllers/book.controller';

// Defining routers
const router = Router();

// Manual auth routes
router.post('/addBook', bookController.handleAddBook);

export default router;
