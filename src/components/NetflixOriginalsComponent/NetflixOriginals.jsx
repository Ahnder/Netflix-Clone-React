import React, { useState, useEffect } from 'react';

import '../LayoutComponent/contentsContainer.scss';

import Movie from '../MovieComponent/Movie';

import fetchMovieData from '../../lib/api/fetchMovieData';

/*
 *  netflixOriginals api 주소
 *  https://api.themoviedb.org/3/discover/tv?api_key=7b2585c3179825537cb88b4d13b35e1c&with_networks=213
 */

const NetflixOriginals = () => {
  const [results, setResults] = useState(null);

  const BASE_URL1 = 'discover/tv';
  const BASE_URL2 = 'with_networks=213';

  useEffect(() => {
    fetchMovieData(BASE_URL1, BASE_URL2, setResults);
  }, []);

  if (!results) return null;

  return (
    <div className="NetflixContainer contentsContainer">
      <h2>NetflixOriginals</h2>
      <div className="movieWrapper">
        {results.map((result) => (
          <Movie
            key={result.id}
            title={result.name}
            posterpath={result.backdrop_path}
            overview={result.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default NetflixOriginals;
