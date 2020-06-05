import React from 'react';

const Movie = ({ title, posterpath }) => {
  return (
    <div className="MovieContainer">
      <p>title: {title}</p>
      <p>posterpath: {posterpath}</p>
    </div>
  );
};

export default Movie;
