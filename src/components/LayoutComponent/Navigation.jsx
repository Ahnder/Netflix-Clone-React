import React from 'react';
import { FiSearch, FiGift, FiBell, FiSmile } from 'react-icons/fi';

import './Navigation.scss';

import navigationLeftMenuLogo from '../../static/images/Netflix_Logo.png';

const Navigation = () => {
  return (
    <nav>
      <div className="navigationContainer">
        <div className="leftMenu">
          <img src={navigationLeftMenuLogo} alt="navigationLogo" />
          <div className="link">Home</div>
          <div className="link">Movies</div>
          <div className="link">TV Show</div>
          <div className="link">Recently</div>
          <div className="link">My List</div>
        </div>
        <div className="rightMenu">
          <div className="searchBox">
            <div className="searchIcon">
              <FiSearch />
            </div>
            <input type="text" placeholder=" Title, Genres.. " />
          </div>
          <div className="navIcon link">
            <FiGift />
          </div>
          <div className="navIcon link">
            <FiBell />
          </div>
          <div className="navIcon link">
            <FiSmile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
