import React from 'react';
import Movie from './Movie/index';


const MovieList = props => (
  <div className="container">
    <div className="row">
      {
        props.movies.map(movie => {
          return (
            <div className="col col-sm-4 float-left" key={movie._id}>
              <Movie movie={movie}></Movie>
            </div>
          )
        })
      }
    </div>
  </div>
)

export default MovieList;
