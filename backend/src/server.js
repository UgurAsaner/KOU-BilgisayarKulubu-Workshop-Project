const express = require('express');
const cors = require('cors');
const router = require('./router');
const morgan = require('morgan');

const app = express();

// Cors Middleware
app.use(cors());

// JSON Body Parser Middleware
app.use(express.json());

// Morgan Request Logger
app.use(morgan('dev'));

// Main Routes
app.use(router);

// Error Handling
app.use((error, req, res, next) => {
  console.error(`${req.method} - ${req.url} failed`, error.message);
  console.error(error.stack);
  res.sendStatus(500);
});

// Not Found
app.use((req, res) => res.sendStatus(404));

module.exports.app = app;
