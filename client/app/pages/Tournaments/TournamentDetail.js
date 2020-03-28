import React, { Component, PropTypes } from "react";
import { withRouter } from "react-router";
import App from "../../components/App/App";

import "../../styles/tournament.scss";

class TournamentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contentss: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch("/api/tournaments/" + id, {
      method: "GET"
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            contents: result.message
          });
          console.log(result.message);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
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
          <div className="tournament-detail">
            <div className="header">
              <img src={contents.game.image}></img>
            </div>
            <div className="container">
              <div className="title">
                <h2>{contents.name}</h2>
              </div>
              <p className="white">{contents.rulebook.content}</p>
            </div>
          </div>
        </App>
      );
    }
  }
}

export default withRouter(TournamentDetail);
