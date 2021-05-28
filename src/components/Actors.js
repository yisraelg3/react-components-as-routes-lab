import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  const actorsDiv = actors.map(actor => { return (
    <div key={actor}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
    </div>
  )})
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDiv}
    </div>
  );
};

export default Actors;
