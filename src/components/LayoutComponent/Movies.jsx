import React from 'react';

import Categories from '../MoviesComponent/Categories';
import GenreMovieList from '../MoviesComponent/GenreMovieList';

import './Movies.scss';

const Movies = () => {
  return (
    <div className="moviesContainer">
      <Categories />
      <GenreMovieList />
    </div>
  );
};

export default Movies;
