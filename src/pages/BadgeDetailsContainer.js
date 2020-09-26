import React from 'react';
import BadgeDetails from './BadgeDetails';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class BadgeDetailsContainer extends React.Component {
  ///SE PODRA HACER UN NUEVO ARCHIVO CON ESTAS FUNCIONES Y LLAMADAS A API?
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalDeleteIsOpen: false,
    modalFeaturesIsOpen: false,
  };

  componentDidMount () {
    this.fetchData ();
  }

  fetchData = async () => {
    this.setState ({loading: true, error: null});

    try {
      const data = await api.badges.read (this.props.match.params.badgeId);
      this.setState ({loading: false, data: data});
    } catch (error) {
      this.setState ({loading: false, error: error});
    }
  };

  handleOpenModal = e => {
    this.setState ({modalIsOpen: true});
  };
  handleCloseModal = e => {
    this.setState ({modalIsOpen: false});
  };

  handleOpenModalFeautures = e => {
    this.setState ({modalFeauturesIsOpen: true});
  };
  handleCloseModalFeautures = e => {
    this.setState ({modalFeauturesIsOpen: false});
  };

  handleDeleteBadge = async e => {
    this.setState ({loading: true, error: null});
    try {
      await api.badges.remove (this.props.match.params.badgeId);
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

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <BadgeDetails
        badge={this.state.data}
        modalIsOpen={this.state.modalIsOpen}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalFeauturesIsOpen={this.state.modalFeauturesIsOpen}
        onCloseModalFeautures={this.handleCloseModalFeautures}
        onOpenModalFeautures={this.handleOpenModalFeautures}
      />
    );
  }
}

export default BadgeDetailsContainer;
