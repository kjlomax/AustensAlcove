import express from 'express';
import {  deleteUser, getAllUsers, getUserId } from '../../controllers/user-controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserId);
router.delete('/:id', deleteUser);
  
export { router as userRouter };
