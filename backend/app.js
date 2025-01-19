const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const { requestLogger, errorLogger } = require('./src/helpers/logger');
const responseFormatter = require('./src/helpers/responseFormatter');
const errorHandler = require('./src/middlewares/errorHandler');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(requestLogger); // Logging middleware

// Import Routes
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const blogRoutes = require('./src/routes/blogRoutes');
const mailRoutes = require('./src/routes/mailRoutes');

// Use Routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/admin', adminRoutes); // Admin routes
app.use('/api/blogs', blogRoutes); // Blog routes
app.use('/api/mails', mailRoutes); // Mail routes

// Error handling middleware
app.use(errorLogger); // Log errors
app.use(errorHandler);

// Response formatter middleware
app.use(responseFormatter);

module.exports = app;
