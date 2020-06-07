import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/LayoutComponent/Header';
import Navigation from './components/LayoutComponent/Navigation';
import Footer from './components/LayoutComponent/Footer';
import MovieList from './components/LayoutComponent/MovieList';
import Movies from './components/LayoutComponent/Movies';

const App = () => {
  return (
    <div className="App">
      <Route path={['/', '/movies']} component={Navigation} />
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies" component={Movies} />
      <Route path={['/', '/movies']} component={Footer} />
    </div>
  );
};

export default App;
