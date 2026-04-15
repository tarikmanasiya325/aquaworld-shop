import express from 'express';
import { createProductReview } from '../controllers/reviewController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/:id/reviews', protect, createProductReview);

export default router;
