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
    name: 'FANTASY',
    id: 14,
  },
  {
    name: 'ADVENTURE',
    id: 12,
  },
];

const Categories = ({ genre, onSelect }) => {
  return (
    <div className="categoriesContainer">
      {genreCategories.map((g) => (
        <div
          className={'genre ' + (genre === g.id && 'active')}
          key={g.id}
          onClick={() => onSelect(g.id)}
        >
          {g.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
