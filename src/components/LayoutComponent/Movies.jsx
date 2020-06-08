import React, { useState, useCallback } from 'react';

import Categories from '../MoviesComponent/Categories';
import GenreMovieList from '../MoviesComponent/GenreMovieList';

import './Movies.scss';

const Movies = () => {
  const [genre, setGenre] = useState(18); // genre Drama id 인 18로 초기화설정
  const onSelect = useCallback((genre) => setGenre(genre), []);

  return (
    <div className="moviesContainer">
      <Categories genre={genre} onSelect={onSelect} />
      <GenreMovieList genre={genre} />
    </div>
  );
};

export default Movies;
