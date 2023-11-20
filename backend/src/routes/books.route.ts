// Importing packages
import { Router } from 'express';

// Importing controllers
import bookController from '../controllers/book.controller';

// Defining routers
const router = Router();

//Book routes
router.post('/addBook', bookController.handleAddBook);
router.get('/fetch-book', bookController.fetchBooks);

export default router;
