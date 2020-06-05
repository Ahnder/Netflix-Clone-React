import React from 'react';

import './Movie.scss';

const Movie = ({ title, posterpath }) => {
  return (
    <div className="MovieContainer">
      <div className="movieTitle hover" onContextMenu="return false">
        {title}
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${posterpath}`}
        alt="poster"
      />
    </div>
  );
};

export default Movie;
