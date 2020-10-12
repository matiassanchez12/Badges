import React from 'react';
import BadgeForm from '../components/BadgeForm';
import '../pages/styles/BadgeNew.css';
import Header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import {db} from './firebase';
import PageLoading from '../components/PageLoading';
import AlertBadgeModal from '../components/AlertBadgeModal';
import PageLoadingFixed from '../components/PageLoadingFixed';

class BadgesNew extends React.Component {
  state = {
    loadingFixed: false,
    loadingMini: false,
    loading: false,
    error: null,
    modalAlertIsOpen: false,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarLocal: '',
    },
  };

  uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData ();
    data.append ('file', files[0]);
    data.append ('upload_preset', 'matias');
    this.setState ({loadingMini: true});
    try {
      const res = await fetch (
        '	https://api.cloudinary.com/v1_1/matiaskaufman/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const file = await res.json ();

      this.setState ({
        form: {
          ...this.state.form,
          avatarLocal: file.secure_url,
        },
      });
      this.setState ({loadingMini: false});
    } catch (error) {
      this.setState ({loadingMini: false});
    }
  };

  handleCloseModal = e => {
    this.setState ({modalAlertIsOpen: false});
  };

  handleChange = e => {
    this.setState ({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault ();
    this.setState ({loadingFixed: true, error: null});
    try {
      await db.collection ('badges').doc ().set (this.state.form);
      // await api.badges.create (this.state.form);
      this.setState ({
        loading: false,
        loadingFixed: false,
        modalAlertIsOpen: true,
      });
      // this.props.history.push ('/badges');
    } catch (error) {
      this.setState ({loading: false, error: error, loadingFixed: false});
    }
  };

  render () {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <div>
        <AlertBadgeModal
          isOpen={this.state.modalAlertIsOpen}
          onClose={this.handleCloseModal}
        />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={Header} alt="Estrellas" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'non-email'}
                avatarUrl={this.state.form.avatarLocal}
                avatarLoading={this.state.loadingMini}
              />
            </div>
            {this.state.loadingFixed ? <PageLoadingFixed /> : ''};
            <div className="col-6 myDiv">
              <h1 className="title">NEW ATTENDANT</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
                onChangeImg={this.uploadImage}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default BadgesNew;
