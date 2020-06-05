import React from 'react';
import './App.css';

import Header from './components/LayoutComponent/Header';
import Navigation from './components/LayoutComponent/Navigation';
import Footer from './components/LayoutComponent/Footer';
import MovieList from './components/LayoutComponent/MovieList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MovieList />
      <Footer />
    </div>
  );
};

export default App;
