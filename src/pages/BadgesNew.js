import React from 'react';
import BadgeForm from '../components/BadgeForm';
import '../pages/styles/BadgeNew.css';
import Header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgesNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
    },
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
      await api.badges.create (this.state.form);
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
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6 myDiv">
              <h1 className="title">NEW ATTENDANT</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default BadgesNew;
