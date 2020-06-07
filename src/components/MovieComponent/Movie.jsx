import React, { useState } from 'react';

import './Movie.scss';

import Modal from '../ModalComponent/Modal';

const Movie = ({ title, posterpath, overview }) => {
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
      {showModal && (
        <Modal
          onClick={() => onCloseModal()}
          imgurl={`https://image.tmdb.org/t/p/original/${posterpath}`}
          title={title}
          overview={overview}
        />
      )}
    </>
  );
};

export default Movie;
