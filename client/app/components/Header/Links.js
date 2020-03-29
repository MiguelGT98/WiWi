import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ user }) => {
  return (
    <ul className="links">
      <li>
        <NavLink exact activeClassName="active" to="/app/torneos">
          Torneos
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/app">
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/perfil/torneos">
          {user ? user.username : "Lucer9"}
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
