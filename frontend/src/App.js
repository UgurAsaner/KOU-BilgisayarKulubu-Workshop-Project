import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import { getAllMovies } from './services/Movie';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [queryState, setQueryState] = React.useState('LOADING');

  const fetchMovies = async (query) => {
    setQueryState('LOADING');
    const { movies } = await getAllMovies(query);
    setMovies(movies);
    setQueryState('DONE');
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <SearchBox searchMovies={fetchMovies}>
          </SearchBox>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            {
              queryState === 'LOADING' ? 
              (
                <h2>
                  Loading...
                </h2>
              ) : (
                <MovieList movies={movies}>
                </MovieList>
              ) 
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
