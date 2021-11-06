import React from 'react';

const defaultSource = 'https://cdn.auth0.com/blog/react-js/react.png';

const MoviePoster = (props) => (
  <div>
    <img src={props.posterUrl || defaultSource} className="img-fluid rounded"></img>
  </div>
)

export default MoviePoster;