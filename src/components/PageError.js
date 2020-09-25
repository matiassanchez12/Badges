import React from 'react';
import ErrorImg from '../images/503Error.svg';
import './Styles/PageError.css';

function PageError (props) {
  return (
    <div className="PageError">
      <img src={ErrorImg} alt="errorImg" width="500px" height="500px" />
      {this.props.error}!
    </div>
  );
}

export default PageError;
