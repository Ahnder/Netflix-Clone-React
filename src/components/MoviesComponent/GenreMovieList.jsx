import React, { useState, useEffect } from 'react';

import fetchMovieData from '../../lib/api/fetchMovieData';

import './GenreMovieList.scss';

const GenreMovie = ({ posterUrl }) => {
  return (
    <div className="genreMovieContainer">
      <img
        src={`https://image.tmdb.org/t/p/original/${posterUrl}`}
        alt="genreMoviePoster"
      />
    </div>
  );
};

/* `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}` */

const GenreMovieList = ({ genre }) => {
  const [results, setResults] = useState(null);

  // const BASE_URL1 = 'discover/movie';
  // const BASE_URL2 = `with_genres=${genre}`;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const id = genre;
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/discover/movie?api_key=7b2585c3179825537cb88b4d13b35e1c&with_genres=${id}`,
  //       );
  //       setResults(response.data.results);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [genre]);

  useEffect(() => {
    const id = genre;
    const BASE_URL1 = 'discover/movie';
    const BASE_URL2 = `with_genres=${id}`;
    fetchMovieData(BASE_URL1, BASE_URL2, setResults);
  }, [genre]);

  if (!results) return null;

  console.log(results);

  return (
    <div className="genreMovieListContainer">
      {results.map((result) => (
        <GenreMovie posterUrl={result.poster_path} />
      ))}
    </div>
  );
};

export default GenreMovieList;
