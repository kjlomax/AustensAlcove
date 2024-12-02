import { Router } from 'express';
import { bookRouter } from './book-routes.js';
import { userRouter } from './user-routes.js';

import {MovieRouter} from './movie-routes.js'





const router = Router();

router.use('/books', bookRouter);
router.use('/users', userRouter);
router.use('/movies', MovieRouter)


export default router;