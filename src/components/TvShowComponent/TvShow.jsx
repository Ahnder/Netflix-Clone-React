import React from 'react';

import './TvShow.scss';

import tvShowBackdrop from '../../static/images/tvshowbackdrop.jpg';

const TvShow = () => {
  return (
    <div className="tvShowContainer">
      <div className="title">TvShowTitle</div>
      <img src={tvShowBackdrop} alt="TvShowBackdropImage" />
    </div>
  );
};

export default TvShow;
