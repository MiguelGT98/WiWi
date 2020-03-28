import React, { Component, PropTypes } from "react";
import { withRouter } from "react-router";
import App from "../../components/App/App";

import "../../styles/tournament.scss";

class TournamentNew extends React.Component {
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
    const initialState = {
      name: "",
      description: "",
      startsAt:"",
      endsAt: "",
      rulebook: { content: "",},
      participants: [],
      teamBased: false,
      game: {},
      address: ""
  };
    fetch("/api/games", {
      method: "GET"
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            contents: result.contents
          });
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
    const { error, isLoaded, contents, name, description, startsAt, endsAt, rulebook, participants, teamBased, game, address} = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <App>
          <div className="tournament-new">
            <div className="title">
              <h2>Nuevo Torneo</h2>
            </div>
            <form action="/api/tournaments" method="POST">
              <input required name="name" placeholder="Nombre" value={name}></input>
              <textarea  requiredrows="7"  name="description" placeholder="Descripción" value={description}></textarea>
              <p className="white">Inicio:</p>
              <div className="grid">
                <input required className="special" type="date" name="startsAt" placeholder="Fecha Inicial" value={startsAt}></input>
                <input required className="special" type="time" name="startsAt" placeholder="Fecha Inicial" value={startsAt}></input>
              </div>
              <p className="white">Fin:</p>
              <div className="grid">
                <input required className="special" type="date" name="endsAt" placeholder="Fecha Final" value={endsAt}></input>
                <input required className="special" type="time" name="endsAt" placeholder="Fecha Final" value={endsAt}></input>
              </div>
              <input required name="address" placeholder="Dirección" value={address}></input>
              <textarea required rows="7"  name="rulebook" placeholder="Reglas" value={rulebook}></textarea>
              <p className="white">Modo de juego:</p>
              <select id="teamBased" name="teamBased">
                <option value="0">Por equipos</option>
                <option value="1">Individual</option>
              </select>              <p className="white">Juego:</p>
              <select id="game" name="game">
                {contents.map(item => (
                  <option key="item.name" value={item._id}>{item.name}</option>
                ))}
              </select>
              <button type="submit">Crear Torneo</button>
            </form>
          </div>


        </App>
      );
    }
  }
}

export default withRouter(TournamentNew);
