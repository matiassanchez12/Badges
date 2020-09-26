import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/DeleteBadgeModal.css';
import Modal from './Modal';
function AlertBadgeModal (props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Congratulations!<br /></h1>
        <p className="Alert-font">
          You Created a Badge
          {' '}
          <span role="img" aria-label="check">✔️</span>
          <br />
        </p>
        <div>
          <Link
            to="/badges"
            onClick={props.onClose}
            className="btn btn-primary buton-modif"
          >
            Back to Menu Badges
          </Link>
        </div>
      </div>

    </Modal>
  );
}

export default AlertBadgeModal;
