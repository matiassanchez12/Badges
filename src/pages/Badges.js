import React from 'react';
import {Link} from 'react-router-dom';
// "server": "json-server --port 3001 --watch server/db.json",
// "seed": "node server/seed.js",
// npm-run-all -p client server
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import {db} from './firebase';

import confLogo from '../images/badge-header.svg';
import '../pages/styles/Badges.css';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    openForm: '',
  };

  componentDidMount () {
    this.fetchData ();
    this.intervalId = setInterval (this.fetchData, 5000);
  }

  handleClick = e => {
    if (!this.state.openForm) {
      this.setState ({openForm: 'formIsOpen'});
    } else {
      this.setState ({openForm: ''});
    }
  };

  fetchData = async () => {
    this.setState ({loading: true, error: null});

    try {
      db.collection ('badges').onSnapshot (badge => {
        const datas = [];
        badge.forEach (doc => {
          datas.push ({...doc.data (), id: doc.id});
        });
        this.setState ({loading: false, data: datas});
      });
      // const data = await api.badges.list ();
      // this.setState ({loading: false, data: data});
    } catch (error) {
      this.setState ({loading: false, error: error});
    }
  };

  render () {
    if (this.state.loading === true && this.state.data === undefined) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                src={confLogo}
                alt="conf-logo"
                className="Badges_conf-logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>

            <button
              onClick={this.handleClick}
              className="btn btn-primary Badges__buttons__search"
            >
              Search Attendant
            </button>

          </div>

          <BadgesList badges={this.state.data} openForm={this.state.openForm} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
