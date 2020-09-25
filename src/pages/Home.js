import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/platziconf-logo.svg';
import AstroLogo from '../images/astronauts.svg';
import './styles/Home.css';
function Home () {
  return (
    <div className="Home__hero">
      <div className="Home__data-div">
        <img className="Home__data-img" src={Logo} alt="Logo" />
        <div className="Home__data-title">
          <h3>
            PRINT YOUR BADGES
            {' '}
            <br />
            The easiest way to manage your
            <br />
            {' '}
            conference
          </h3>
        </div>
        <Link className="Home__data-button" to="/badges">
          <button>
            Start Now
          </button>
        </Link>
      </div>
      <div className="Home__img">
        <img src={AstroLogo} alt="Astro" />
      </div>
    </div>
  );
}

export default Home;
