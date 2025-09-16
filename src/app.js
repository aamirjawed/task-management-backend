import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); 

import express from 'express';
import connectDB from './db/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'; 

import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,               
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());           

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1);
  });
