const mongoose = require('mongoose');

const movie = mongoose.model('movies', new mongoose.Schema({
  title: String
}));

module.exports = movie;
