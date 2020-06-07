import React, { useState } from 'react';

import './Movie.scss';

import Modal from '../ModalComponent/Modal';

const Movie = ({ title, posterpath }) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="MovieContainer" onClick={() => onShowModal()}>
        <div className="movieTitle hover">{title}</div>
        <img
          src={`https://image.tmdb.org/t/p/original/${posterpath}`}
          alt="poster"
        />
      </div>
      {showModal && <Modal onClick={() => onCloseModal()} />}
    </>
  );
};

export default Movie;
