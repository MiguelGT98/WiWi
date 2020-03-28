import React, { Component, PropTypes } from 'react';
import { withRouter } from "react-router";
import App from "../../components/App/App";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import "../../styles/tournament.scss";


class TournamentHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/api/tournaments", {
      method: "GET",
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            contents: result.contents
          });


        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, contents } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <App>
          <div className="tournament-page">
            <div className="title">
              <h2>Torneos: </h2>
              <a href="/app/add/torneos"className="full button right">Crear torneo<FontAwesomeIcon className="fai" icon={faPlus} /></a>
            </div>
            <div className="item-container">
              {contents.map(item => (
                <a key={item.name} className="item" href={'/app/torneos/' + item._id}>
                  <div className="image-fader">
                    <p className="white">{item.game.name}</p>
                  </div>
                  <img src={item.game.image}></img>
                  <div className="item-content">
                    <h3>{item.name}</h3>
                    <p><FontAwesomeIcon className="fai" icon={faMapMarkerAlt} /> {item.address}</p>
                    <p><FontAwesomeIcon className="fai" icon={faCalendarAlt} /> {item.startsAt}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </App>
      );
    }
  }
}

export default withRouter(TournamentHome);


//        const id = (this.props.match.params.id)
