import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/LayoutComponent/Header';
import Navigation from './components/LayoutComponent/Navigation';
import Footer from './components/LayoutComponent/Footer';
import MovieList from './components/LayoutComponent/MovieList';
import Movies from './components/LayoutComponent/Movies';
import TvShowList from './components/TvShowComponent/TvShowList';

const App = () => {
  return (
    <div className="App">
      <Route component={Navigation} />
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies" component={Movies} />
      <Route path="/tvshow" component={TvShowList} />
      <Route component={Footer} />
    </div>
  );
};

export default App;
