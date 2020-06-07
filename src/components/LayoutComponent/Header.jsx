import React, { useState, useEffect } from 'react';
import { FiPlay, FiPlus, FiInfo } from 'react-icons/fi';

import './Header.scss';

import headerBackgroudImage from '../../static/images/Netflix_Header_Img.jpg';

import fetchMovieData from '../../lib/api/fetchMovieData';

const Header = () => {
  const [results, setResults] = useState(null);
  const [randomNumber, setRandomNumber] = useState(0);

  const BASE_URL1 = 'discover/tv';
  const BASE_URL2 = 'with_networks=213';

  useEffect(() => {
    fetchMovieData(BASE_URL1, BASE_URL2, setResults);
    function getRandomNumber() {
      const rnb = Math.ceil(Math.random() * 19);
      setRandomNumber(rnb);
    }
    getRandomNumber();
  }, []);

  if (!results) return null;

  if (!randomNumber) return null;

  const randomResult = results[randomNumber];

  console.log(randomResult);

  return (
    <header>
      <div className="headerContainer">
        <img
          src={`https://image.tmdb.org/t/p/original/${randomResult.backdrop_path}`}
          alt="headerBackgroudImage"
        />
        <div className="headerContents">
          <h1>{randomResult.name}</h1>
          <p>{randomResult.overview}</p>
          <div className="headerBtnWrapper">
            <button>
              <FiPlay />
              <span>PLAY</span>
            </button>
            <button>
              <FiPlus />
              <span>MY LIST</span>
            </button>
            <button>
              <FiInfo />
              <span>DETAILS</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
