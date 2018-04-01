const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const db = mongoose.connection;
const dbUri = 'mongodb://localhost/address_book_db';

mongoose.connect(dbUri);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to db');
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
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});