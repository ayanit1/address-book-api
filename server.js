const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connection;
const PORT = 3000;
const DB_URI = 'mongodb://localhost/addressbookdb';

// Models
require('./models/Contact');
require('./models/Comments');

mongoose.connect(DB_URI);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to ${DB_URI}`);
});

// Middleware
app.use(bodyParser.urlencoded({extended: true}))

// Routes for app
app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/test', (req, res) => {
  console.log(req.body);
})

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});