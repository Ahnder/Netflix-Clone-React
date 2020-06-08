import React, { useState, useEffect } from 'react';

import './TvShowList.scss';

import TvShow from './TvShow';

import fetchMoviedata from '../../lib/api/fetchMovieData';

const TvShowList = () => {
  const [results, setResults] = useState(null);

  const BASE_URL1 = 'tv/popular';
  const BASE_URL2 = 'language=en-US&page=1';

  useEffect(() => {
    fetchMoviedata(BASE_URL1, BASE_URL2, setResults);
  }, []);

  if (!results) return null;

  console.log(results);

  return (
    <div className="tvShowListContainer">
      <h2>TV SHOW</h2>
      {results.map((result) => (
        <TvShow
          key={result.title}
          title={result.name}
          backdroppath={result.backdrop_path}
        />
      ))}
    </div>
  );
};

export default TvShowList;
