import React from 'react';
import md5 from 'md5';
import MiniLoader from '../components/MiniLoader';
import './Styles/Gravatar.css';

function Gravatar (props) {
  const email = props.email;
  const hash = md5 (email);
  if (props.avatarLocal !== '') {
    return (
      <div className="divContainer">
        <img className={props.className} src={props.avatarLocal} alt="Avatar" />
        {props.avatarLoading
          ? <div className="divNormal"><MiniLoader /></div>
          : ''}
      </div>
    );
  }
  return (
    <div className="divContainer">
      <img
        className={props.className}
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt="Avatar"
      />
      {props.avatarLoading
        ? <div className="divNormal"><MiniLoader /></div>
        : ''}
    </div>
  );
}

export default Gravatar;
