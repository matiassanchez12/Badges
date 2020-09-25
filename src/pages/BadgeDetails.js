import React from 'react';
import Badge from '../components/Badge';
import {Link} from 'react-router-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

import './styles/BadgeDetails.css';
import Header from '../images/platziconf-logo.svg';

function BadgeDetails (props) {
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={Header} alt="Estrellas" width="150px" />
      </div>
      <div className="my_badge_container">
        <div className="col-6 badge_container">
          <Badge
            firstName={badge.firstName}
            lastName={badge.lastName}
            email={badge.email}
            twitter={badge.twitter}
            jobTitle={badge.jobTitle}
            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
          />

        </div>
        <div className="col-6 badge_opt">
          <h1>Actions:</h1>
          <Link
            to={`/badges/${badge.id}/edit`}
            className="btn btn-primary one_button"
          >
            Edit
          </Link>
          <button className="btn btn-primary one_button">Print</button>

          <button
            onClick={props.onOpenModal}
            className="btn btn-danger one_button"
          >
            Delete
          </button>

          <DeleteBadgeModal
            isOpen={props.modalIsOpen}
            onClose={props.onCloseModal}
            onDeleteBadge={props.onDeleteBadge}
          />
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
