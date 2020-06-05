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

  console.log(results);

  return (
    <div className="NetflixContainer">
      <h2>NetflixOriginals</h2>
      {results.map((result) => (
        <div key={result.id}>title: {result.name}</div>
      ))}
      <Movie />
    </div>
  );
};

export default NetflixOriginals;
