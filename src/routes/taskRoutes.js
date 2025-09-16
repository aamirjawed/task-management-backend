import express from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTaskStats,
} from '../controllers/taskControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(protect);

// Routes
router.route('/')
  .get(getTasks)
  .post(createTask);

router.get('/stats', getTaskStats);

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

export default router;
