import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../MovieComponent/Movie';

const NetflixOriginals = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchDataFunc = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/tv?api_key=7b2585c3179825537cb88b4d13b35e1c&with_networks=213',
        );
        setResults(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataFunc();
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
