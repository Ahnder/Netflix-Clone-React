import React from 'react';

import NetflixOriginals from '../NetflixOriginalsComponent/NetflixOriginals';
import Treding from '../TrendingComponent/Trending';

const MovieList = () => {
  return (
    <div className="MovieListContainer">
      <NetflixOriginals />
      <Treding />
    </div>
  );
};

export default MovieList;
