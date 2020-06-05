import React from 'react';
import { FiPlay, FiPlus, FiInfo } from 'react-icons/fi';

import './Header.scss';

import headerBackgroudImage from '../../static/images/Netflix_Header_Img.jpg';

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <img src={headerBackgroudImage} alt="headerBackgroudImage" />
        <div className="headerContents">
          <h1>STRANGER THINGS</h1>
          <p>
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces, and one strange
            little girl.
          </p>
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
