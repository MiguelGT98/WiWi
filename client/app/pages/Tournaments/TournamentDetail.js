import React, { Component, PropTypes } from "react";
import { withRouter } from "react-router";
import App from "../../components/App/App";
import { decode } from "jsonwebtoken";
import "../../styles/tournament.scss";


export function Rtif({ boolean, ...props }) {
  const { children } = props;
  if (boolean) return { ...children };
  return null;
}

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
    let isUserRegistred=false;
    const jwt = localStorage.getItem("jwt");
    const obj = decode(jwt);
    const id = obj.id;
    const name = obj.username;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      for(let p of contents.participants){
        if (p._id=id){
          isUserRegistred = true
        }
      }


      console.log(contents.startsAt);
      let countDownDate = new Date(contents.startsAt * 1000).getTime();
      let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        document.getElementById("demo").innerHTML =
          hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);

      function handleClick(e) {
        e.preventDefault();
        fetch("/api/tournaments/register/" + contents._id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id, name })
        })
          .then(res => res.json())
          .then(
            result => {
              console.log(result.message);
              window.location.reload();
            },
            error => {
              console.log(error);
            }
          );
      }

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
              <div className="info">
                <h3 className="white">Descripción: </h3>
                <p className="white">{contents.description}</p>
              </div>
              <div className="rules">
                <h3 className="white">Reglas: </h3>
                <p className="white">{contents.rulebook.content}</p>
              </div>
              <div className="participants">
                <h3 className="white">Participantes: </h3>

                {contents.participants.map(p => (
                  <div key={p._id}>{p.name}</div>
                ))}
              </div>
            </div>
            <div className="registerForm">
              <div className="shadow">
                <p>El torneo empieza en: </p>
                <h3 id="demo" className="white"></h3>
                <Rtif boolean={!isUserRegistred}>
                  <a className="button full large" onClick={handleClick} href="/app/torneos">
                    Registrar
                  </a>
                </Rtif>
                <Rtif boolean={isUserRegistred}>
                  <a className="button large" onClick={handleClick} href="/app/torneos">
                    Dar de Baja
                  </a>
                </Rtif>
              </div>
            </div>
          </div>
        </App>
      );
    }
  }
}

export default withRouter(TournamentDetail);
