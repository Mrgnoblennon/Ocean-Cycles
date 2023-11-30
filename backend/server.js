const express = require('express');
const connectDB = require('./config/connection');
const Bike = require('./models/Bike');

const app = express();
const PORT = 3000;

require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
// Add your routes here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  