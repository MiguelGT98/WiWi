import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../styles/forms.scss";
import SocialAuth from "./SocialAuth";

export class LoginForm extends Component {
  render() {
    return (
      <form>
        <h2>Inicio de sesión</h2>
        <input type="email" placeholder="Correo"></input>
        <input type="password" placeholder="Contraseña"></input>
        <a href="/">¿Olvidaste tu contraseña?</a>
        <button type="submit">Iniciar sesión</button>
        <Link to="/registro" className="center">
          Registrarse
        </Link>
        <SocialAuth></SocialAuth>
      </form>
    );
  }
}

export default LoginForm;
