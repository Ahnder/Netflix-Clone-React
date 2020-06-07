import React from 'react';
import { FiPlay, FiPlus, FiInfo } from 'react-icons/fi';

import './Modal.scss';

const Modal = ({ onClick }) => {
  return (
    <div className="modalContainer" onClick={onClick}>
      <div className="modalWrapper">
        <img src="" alt="modalMoviePoster" />
        <div className="modalContents">
          <h1>title</h1>
          <p>overview</p>
          <div className="modlaBtn">
            <button>
              <FiPlay />
              <span>PLAY</span>
            </button>
            <button>
              <FiPlus />
              <span>MY LIST</span>
            </button>
            <button>
              <FiInfo />
              <span>DETAILS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
