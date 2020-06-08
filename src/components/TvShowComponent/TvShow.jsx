import React from 'react';
import { FiPlay } from 'react-icons/fi';

import './TvShow.scss';

const TvShow = ({ title, backdroppath }) => {
  return (
    <div className="tvShowContainer">
      <div className="title">{title}</div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdroppath}`}
        alt="TvShowBackdropImage"
      />
      <div className="icon">
        <FiPlay />
      </div>
    </div>
  );
};

export default TvShow;
