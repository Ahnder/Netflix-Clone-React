import React, { useState, useEffect } from 'react';

import '../LayoutComponent/contentsContainer.scss';

import Movie from '../MovieComponent/Movie';

import fetchMovieData from '../../lib/api/fetchMovieData';

/*
 *  Trending api 주소
 *  https://api.themoviedb.org/3/trending/all/week?api_key=7b2585c3179825537cb88b4d13b35e1c&language=en-US
 */

const Trending = () => {
  const [results, setResults] = useState(null);

  const BASE_URL1 = 'trending/all/week';
  const BASE_URL2 = 'language=en-US';

  useEffect(() => {
    fetchMovieData(BASE_URL1, BASE_URL2, setResults);
  }, []);

  if (!results) return null;

  return (
    <div className="TrendingContainer contentsContainer">
      <h2>TrendingComponent</h2>
      <div className="movieWrapper">
        {results.map((result) =>
          result.name ? (
            <Movie
              key={result.id}
              title={result.name}
              posterpath={result.backdrop_path}
            />
          ) : (
            <Movie
              key={result.id}
              title={result.title}
              posterpath={result.backdrop_path}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Trending;
