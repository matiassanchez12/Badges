import React from 'react';
import Gravatar from './Gravatar';
import './Styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import LogoTwitter from '../images/Twitter.png';

class Badge extends React.Component {
  render () {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            avatar={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <div>{this.props.jobTitle}</div>

          <div className="twitter-color">
            <img src={LogoTwitter} alt="logo" width="45px" height="45px" />
            @{this.props.twitter}
          </div>
        </div>

        <div className="Badge__footer">#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
