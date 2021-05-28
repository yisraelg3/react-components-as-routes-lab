import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  const movieDiv = movies.map(movie => { return(
    <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
    </div>)})
  
  return (
    <div>
        <h1>Movies Page</h1>
        {movieDiv}
    </div>
  );
};

export default Movies;
