import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../styles/forms.scss";
import SocialAuth from "./SocialAuth";

export class RegisterForm extends Component {
  render() {
    return (
      <form>
        <h2>Registro</h2>
        <input type="email" name="email" placeholder="Correo"></input>
        <input type="text" name="username" placeholder="Gamertag"></input>
        <input type="password" placeholder="Contraseña"></input>
        <input type="text" name="city" placeholder="Ciudad"></input>
        <button type="submit">Registrarse</button>
        <Link to="/" className="center">
          Iniciar sesión
        </Link>
        <SocialAuth></SocialAuth>
      </form>
    );
  }
}

export default RegisterForm;
