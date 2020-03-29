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
      contents: []
    };
  }

  genBracket(participants) {
    let names = [];
    for(let p of participants){names.push(p)}
    this.shuffle(names);
    const length = names.length;
    let p = names.length;
    let sum = 0;
    let bracket = [];
    if (length > 1) {
      bracket.push(new Array(p));
      // Get array size of all matches
      do {
        p = Math.ceil(p / 2);
        bracket.push(new Array(p).fill({ name: "-" }));
      } while (p != 1);

      //Generate bracket
      for (let i = 0; i < length; i++) {
        bracket[0][i] = names[0];
        names.shift();
        this.shuffle(names);
      }
    }else{
      bracket.push([{name:'No hay suficientes participantes'}])
    }
    return bracket;
  }


  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  setWinBracket(row, col){
    const player = this.state.bracket[row][col]
    if(player.name!='-'){
      console.log(Math.floor(col/2))
      this.state.bracket[row+1][Math.floor(col/2)] = player
    }
    this.setState({
      isLoaded: true,
      contents: this.state.contents,
      bracket: this.state.bracket
    });
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
            contents: result.message,
            bracket: this.genBracket(result.message.participants)
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
    const { error, isLoaded, contents, bracket } = this.state;
    let isUserRegistred = false;
    const jwt = localStorage.getItem("jwt");
    const obj = decode(jwt);
    const id = obj.id;
    const name = obj.username;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      for (let p of contents.participants) {
        if ((p._id = id)) {
          isUserRegistred = true;
        }
      }

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
          document.getElementById("demo").innerHTML = "00h 00m 00s";
        }
      }, 1000);

      function registerUser(e) {
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
                  {contents.participants.map((item, index) => {
                      return (
                        <div key={index}>
                         {item.name}
                        </div>
                      );
                    })}
              </div>
            </div>
            <div className="registerForm">
              <div className="shadow">
                <p>El torneo empieza en: </p>
                <h3 id="demo" className="white">
                  00h 00m 00s
                </h3>
                {!isUserRegistred ? (
                  <a
                    className="button full large"
                    onClick={registerUser}
                    href="/app/torneos"
                  >
                    Registrar
                  </a>
                ) : (
                  <a
                    className="button large"
                    onClick={registerUser}
                    href="/app/torneos"
                  >
                    Dar de Baja
                  </a>
                )}
              </div>
            </div>
            <h3 className="white borrar">Bracket: </h3>
            <div className="bracketContainer">
              {bracket.map((row, rowIndex) => {
                return (
                  <div key={rowIndex} className="bracket-col">
                    {row.map((col, colIndex) => {
                      return (
                        <div key={colIndex} onClick={() => this.setWinBracket(rowIndex,colIndex)}>
                          <span className="detail">
                            <span></span>
                          </span>
                          <p>{col.name}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              {console.log(bracket)}
            </div>
          </div>
        </App>
      );
    }
  }
}

export default withRouter(TournamentDetail);
