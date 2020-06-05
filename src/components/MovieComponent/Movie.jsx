import React from 'react';

import './Movie.scss';

const Movie = ({ title, posterpath }) => {
  return (
    <div className="MovieContainer">
      <p>title: {title}</p>
      <p>posterpath: {posterpath}</p>
    </div>
  );
};

export default Movie;
