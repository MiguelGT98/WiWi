import React, { useReducer } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "whatwg-fetch";

import "../../../styles/forms.scss";
import SocialAuth from "./SocialAuth";

const initialState = {
  email: "",
  password: ""
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  };
};

const LoginForm = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(json => {
        if (!json.success) {
          throw new Error(json.message);
        }
        localStorage.setItem("jwt", json.token);
        history.push("/app");
      })
      .catch(error => {
        console.error(error);
      });
  };

  const { email, password } = state;

  return (
    <form onSubmit={onSubmit}>
      <h2>Inicio de sesión</h2>
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={email}
        onChange={onChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={onChange}
      ></input>
      <a href="/">¿Olvidaste tu contraseña?</a>
      <button type="submit">Iniciar sesión</button>
      <Link to="/registro" className="center">
        Registrarse
      </Link>
      <SocialAuth></SocialAuth>
    </form>
  );
};

export default withRouter(LoginForm);
