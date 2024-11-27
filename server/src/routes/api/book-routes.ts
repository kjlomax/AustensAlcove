import express from 'express';
import { getAllBooks, getBookId, deleteBook } from '../../controllers/book-controller.js';


const router = express.Router();
router.get('/', getAllBooks);
router.get('/:id', getBookId);
router.delete('/:id', deleteBook);


export { router as bookRouter };
