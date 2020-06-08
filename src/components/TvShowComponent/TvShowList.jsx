import React from 'react';

import './TvShowList.scss';

import TvShow from './TvShow';

const TvShowList = () => {
  return (
    <div className="tvShowListContainer">
      <h2>TV SHOW</h2>
      <TvShow />
      <TvShow />
      <TvShow />
      <TvShow />
      <TvShow />
      <TvShow />
      <TvShow />
    </div>
  );
};

export default TvShowList;
