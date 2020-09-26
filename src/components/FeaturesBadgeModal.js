import React from 'react';
import Modal from './Modal';

function FeaturesBadgeModal (props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Badge Data</h1>
        <p>
          <br />
          <strong>ID: </strong>
          {props.badgeData.id || 'We arent found data!😱'}
        </p>

        <p>
          <strong>NAME: </strong>
          {props.badgeData.firstName || 'We arent found data!😱'}
        </p>
        <p>
          <strong>LASTNAME: </strong>
          {props.badgeData.lastName || 'We arent found data!😱'}
        </p>
        <p>
          <strong>EMAIL: </strong>
          {props.badgeData.email || 'We arent found data!😱'}
        </p>
        <p>
          <strong>JOBTITLE: </strong>
          {props.badgeData.jobTitle || 'We arent found data!😱'}
        </p>
        <p>
          <strong>TWITTER: </strong>
          {props.badgeData.twitter || 'We arent found data!😱'}
        </p>
        <div>
          <button onClick={props.onClose} className="btn btn-primary">
            Back
          </button>
        </div>
      </div>

    </Modal>
  );
}

export default FeaturesBadgeModal;
