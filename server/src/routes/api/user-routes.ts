import express from 'express';
import {  deleteUser, getUserId } from '../../controllers/user-controller.js';

const router = express.Router();

router.get('/:id', getUserId);
router.delete('/:id', deleteUser);
  
export { router as userRouter };
