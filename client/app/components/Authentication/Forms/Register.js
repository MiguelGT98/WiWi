import React, { useReducer } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "whatwg-fetch";

import "../../../styles/forms.scss";
import SocialAuth from "./SocialAuth";

const initialState = {
  email: "",
  username: "",
  password: "",
  city: ""
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  };
};

const RegisterForm = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, username, city })
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("jwt", json.token);
        history.push("/app");
      })
      .catch(error => {
        console.error(error);
      });
  };

  const { email, username, password, city } = state;

  return (
    <form onSubmit={onSubmit}>
      <h2>Registro</h2>
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={email}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="username"
        placeholder="Gamertag"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="city"
        placeholder="Ciudad"
        value={city}
        onChange={onChange}
      ></input>
      <button type="submit">Registrarse</button>
      <Link to="/" className="center">
        Iniciar sesión
      </Link>
      <SocialAuth></SocialAuth>
    </form>
  );
};

export default withRouter(RegisterForm);
