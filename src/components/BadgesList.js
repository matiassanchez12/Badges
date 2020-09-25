import React from 'react';
import {Link} from 'react-router-dom';

import '../components/Styles/BadgesList.css';
import logTwitter from '../images/Twitter.png';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render () {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt="Avatar"
        />

        <div className="BadgesListItem__fonts">
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />
          <div className="font-color">
            <img src={logTwitter} alt="asd" width="25px" height="25px" />
            @{this.props.badge.twitter}
          </div>
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges (badges) {
  const [query, setQuery] = React.useState ('');
  const [filteredBadges, setFilteredBadges] = React.useState (badges);

  React.useMemo (
    () => {
      const result = badges.filter (badge => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase ()
          .includes (query.toLowerCase ());
      });

      setFilteredBadges (result);
    },
    [badges, query]
  );

  return {query, setQuery, filteredBadges};
}

function BadgesList (props) {
  const badges = props.badges;

  const {query, setQuery, filteredBadges} = useSearchBadges (badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className={`form-atributes-container ${props.openForm}`}>
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-atributes"
            value={query}
            onChange={e => {
              setQuery (e.target.value);
            }}
          />
        </div>
        <h3 className="title-Error">No badges were found :(</h3>
      </div>
    );
  }

  return (
    <div className="BadgesList">

      <div className={`form-atributes-container ${props.openForm}`}>
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-atributes"
          value={query}
          placeholder="Search a attendant"
          onChange={e => {
            setQuery (e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map (badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
