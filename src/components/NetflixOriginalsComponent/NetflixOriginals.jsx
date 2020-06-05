import React, { useState, useEffect } from 'react';

import Movie from '../MovieComponent/Movie';

import fetchMovieData from '../../lib/api/fetchMovieData';

const NetflixOriginals = () => {
  const [results, setResults] = useState(null);

  const BASE_URL1 = 'discover/tv';
  const BASE_URL2 = 'with_networks=213';

  useEffect(() => {
    fetchMovieData(BASE_URL1, BASE_URL2, setResults);
  }, []);

  if (!results) return null;

  return (
    <div className="NetflixContainer">
      <h2>NetflixOriginals</h2>
      <div>
        {results.map((result) => (
          <Movie
            key={result.id}
            title={result.name}
            posterpath={result.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default NetflixOriginals;
