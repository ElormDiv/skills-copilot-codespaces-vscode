// Create web server
// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Choose a port

// Middleware to parse JSON requests
app.use(express.json());

// Sample route for comments
app.get('/comments', (req, res) => {
  // Replace with actual logic to fetch comments from a database
  const comments = [
    { id: 1, text: 'Great work!' },
    { id: 2, text: 'Keep it up!' },
  ];
  res.json(comments);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
