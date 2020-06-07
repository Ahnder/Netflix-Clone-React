import React from 'react';

import './Categories.scss';

const genreCategories = [
  {
    name: 'DRAMA',
    id: 18,
  },
  {
    name: 'SF',
    id: 878,
  },
  {
    name: 'THRILLER',
    id: 53,
  },
  {
    name: 'ACTION',
    id: 28,
  },
  {
    name: 'WAR',
    id: 10752,
  },
  {
    name: 'CRIME',
    id: 80,
  },
  {
    name: 'DOCUMENTARY',
    id: 99,
  },
  {
    name: 'ADVENTURE',
    id: 12,
  },
];

const Categories = () => {
  return (
    <div className="categoriesContainer">
      {genreCategories.map((genre) => (
        <div className="genre" key={genre.id}>
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
