import React from 'react';


const SearchBox = (props) => {

  const searchMovies = (event) => {
    event.preventDefault();
    const { value } = event.target;
    if (value.length > 2 || value === '') {
      props.searchMovies(value);
    }
  };

  return (
    <div className="row mt-3 mb-3">
      <br></br>
      <input
        type="text"
        placeholder="Search Movies.."
        onChange={searchMovies}
      />
      <br></br>
    </div>
  );
}

export default SearchBox;