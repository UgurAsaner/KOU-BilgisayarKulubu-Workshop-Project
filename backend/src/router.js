const express = require('express');
const { getAllMovies } = require('./services/movie');

const router = express.Router();

router.get('/hello', (req, res) => res.send('Hello from Movie Comments'));

router.get('/error', (req, res) => { 
  throw Error('Custom error on endpoint')
});

router.get('/api/movies', async (req, res) => {
  const { query } = req.query;
  console.log(query);
  const movies = await getAllMovies({ query });
  res.json({ movies });
});

module.exports = router;
