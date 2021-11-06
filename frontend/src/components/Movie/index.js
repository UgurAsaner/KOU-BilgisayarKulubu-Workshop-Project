import React from 'react';
import MoviePoster from './MoviePoster';
import MovieTitle from './MovieTitle';


const Movie = props => (
  <div>
    <div>
      <MoviePoster posterUrl={props.movie.poster}></MoviePoster>
    </div>
    <div>
      <MovieTitle title={props.movie.title}></MovieTitle>
    </div>
  </div>
)

export default Movie;