import express from 'express';
import {
  deactivateUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from '../controllers/user.controller.js';
import verifyToken from '../middleware/verifyToken.js';
import { checkRole } from '../middleware/checkRole.js';

const router = express.Router();

//get all user
router.get('/users', verifyToken, checkRole(['admin']), getAllUser);
//singleuser
router.get('/users/:id', verifyToken, checkRole(['admin']), getSingleUser);
//deactivate the user => isActive : true ==> false
router.patch('/users/:id/deactivate', verifyToken, checkRole(['admin']), deactivateUser);
//update
router.patch('/users/:id', verifyToken, checkRole(['admin']), updateUser);

export default router;
