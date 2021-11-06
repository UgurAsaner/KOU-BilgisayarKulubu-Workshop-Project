const movieModel = require('../models/movie');

module.exports.getAllMovies = async ({ query='' }) => {
  try {
    console.log(query);
    const movies = await movieModel.find({ title: { $regex: `(?i)${query}` }}).limit(15).exec();
    return movies;
  } catch (error) {
    console.error('Failed to get all Movies', error.message, error.stack);
    return [];
  }
};
