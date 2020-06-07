import React from 'react';

import './GenreMovieList.scss';

import img from '../../static/images/poster1.jpg';

const GenreMovie = () => {
  return (
    <div className="genreMovieContainer">
      <img src={img} />
    </div>
  );
};

const GenreMovieList = () => {
  return (
    <div className="genreMovieListContainer">
      <GenreMovie />
      <GenreMovie />
      <GenreMovie />
      <GenreMovie />
      <GenreMovie />
      <GenreMovie />
      <GenreMovie />
      <GenreMovie />
    </div>
  );
};

export default GenreMovieList;
