import dotenv from "dotenv";

dotenv.config();

const config = {
  SERVER_PORT: process.env.SERVER_PORT || 5000,
  CLIENT_PORT: process.env.CLIENT_PORT || 3000,
  DB_URL: process.env.DATABASE_URL || "postgresql://postgres:12345678@127.0.0.1:5432/e-commerce",
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;