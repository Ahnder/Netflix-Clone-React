import React, { useState, useEffect } from 'react';
import { FiSearch, FiGift, FiBell, FiSmile } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './Navigation.scss';

import navigationLeftMenuLogo from '../../static/images/Netflix_Logo.png';

const Navigation = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScrollNav = () => {
    window.scrollY === 0
      ? setScrollNav(false)
      : window.scrollY > 50 && setScrollNav(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollNav);
    return () => window.removeEventListener('scroll', handleScrollNav);
  }, []);

  return (
    <nav>
      <div className={'navigationContainer ' + (scrollNav && 'scrollDown')}>
        <div className="leftMenu">
          <img src={navigationLeftMenuLogo} alt="navigationLogo" />
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/movies" className="link">
            Movies
          </Link>
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
