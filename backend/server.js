const express = require('express');
const connectToMongoDB = require('./config/connection'); // Path to your MongoDB connection file

const app = express();

// Connect to MongoDB
connectToMongoDB();

// Define your routes or other middleware here

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
