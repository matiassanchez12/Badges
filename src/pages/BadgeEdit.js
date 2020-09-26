import React from 'react';
import BadgeForm from '../components/BadgeForm';
import '../pages/styles/BadgeEdit.css';
import Header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgesNew extends React.Component {
  state = {
    loadingMini: false,
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarLocal: '',
    },
  };

  componentDidMount () {
    this.fetchData ();
  }

  fetchData = async e => {
    this.setState ({loading: true, error: null});

    try {
      const data = await api.badges.read (this.props.match.params.badgeId);

      this.setState ({loading: false, form: data});
    } catch (error) {
      this.setState ({loading: false, error: error});
    }
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
    this.setState ({loading: true, error: null});

    try {
      await api.badges.update (
        this.props.match.params.badgeId,
        this.state.form
      );
      this.setState ({loading: false});

      this.props.history.push ('/badges');
    } catch (error) {
      this.setState ({loading: false, error: error});
    }
  };

  render () {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div>
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
                  email={this.state.form.email || 'EMAIL'}
                  avatarUrl={this.state.form.avatarLocal}
                  avatarLoading={this.state.loadingMini}
                />
              </div>
              <div className="col-6 myDiv">
                <h1 className="title">EDIT ATTENDANT</h1>
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
      </React.Fragment>
    );
  }
}

export default BadgesNew;
