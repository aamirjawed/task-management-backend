import express from 'express';
import { updateProfile, deleteProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(protect);

// Routes
router.route('/profile')
  .put(updateProfile)
  .delete(deleteProfile);

export default router;
