import React from 'react';
import ErrorImg from '../images/503Error.svg';
import './styles/NotFound.css';

function NotFound () {
  return (
    <div className="PageError">
      <img src={ErrorImg} alt="errorImg" width="500px" height="500px" />
    </div>
  );
}

export default NotFound;
