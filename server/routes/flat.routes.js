import express from 'express';
import { createFlat, getFlats, getFlatById, updateFlat, deleteFlat, getAvailableFlats } from '../controllers/flat.controller.js';

const router = express.Router();

router.get('/available', getAvailableFlats);
router.post('/', createFlat);
router.get('/', getFlats);
router.get('/:id', getFlatById);
router.put('/:id', updateFlat);
router.delete('/:id', deleteFlat);

export default router;
