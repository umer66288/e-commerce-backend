import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import config from "./config/env.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Routes
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Security middleware
app.use(helmet());

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Fixed: 15 minutes in milliseconds
  max: 1000, // More reasonable limit
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
  },
});
app.use(limiter);

// CORS
app.use(cors({
  origin: config.CLIENT_URL || '*', // Use config
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsing middleware
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
if (config.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Routes
app.use("/api", userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;