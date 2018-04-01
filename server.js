const express = require('express');
const app = express();

const port = 3000;

// Starting the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Routes for app
app.get('/', (req, res) => {
  res.send('hello world');
});
