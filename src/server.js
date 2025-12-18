import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/prisma.js';

const PORT = process.env.SERVER_PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:5000`);
    });
  } catch (err) {
    console.error('Startup failed:', err);
    process.exit(1);
  }
};

startServer();