import React, { useState, useEffect } from "react";
import "whatwg-fetch";

import "../../styles/user/tournaments.scss";
import { decodeUser } from "../../helpers/AuthService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Tournaments = ({ user }) => {
  const [tournaments, setTournaments] = useState({});

  const fetchTournamentsData = () => {
    const { id } = decodeUser();

    fetch(`/api/user/${id}/tournaments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        const { tournaments } = json;
        console.log(json);
        setTournaments(tournaments);
      });
  };

  useEffect(() => {
    fetchTournamentsData();
  }, []);

  return (
    <div className="tournament-wrapper">
      <h2>Mis torneos (jugador)</h2>
      <div className="item-container">
        {tournaments.length > 0 &&
          tournaments.map(tournament => {
            let d = new Date(tournament.startsAt*1000)
            tournament.startsAt = d.toLocaleString()
            
            return (
              <a
                key={tournament.id}
                className="item"
                href={"/app/torneos/" + tournament._id}
              >
                <div className="image-fader">
                  <p className="white">{tournament.game.name}</p>
                </div>
                <img src={tournament.game.image}></img>
                <div className="item-content">
                  <h3>{tournament.name}</h3>
                  <p>
                    <FontAwesomeIcon className="fai" icon={faMapMarkerAlt} />{" "}
                    {tournament.address}
                  </p>
                  <p>
                    <FontAwesomeIcon className="fai" icon={faCalendarAlt} />{" "}
                    {tournament.startsAt}
                  </p>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Tournaments;
