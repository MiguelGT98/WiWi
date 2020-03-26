import React from "react";

import "../../styles/homepage.scss";

const Home = () => {
  return (
    <div className="homepage">
      <img
        className="banner"
        src="https://i.pinimg.com/originals/95/d9/e1/95d9e1d75848bc5b4fd280e1f722f7b5.jpg"
      ></img>
      <form>
        <h2>Inicio de sesión</h2>
        <input type="email" placeholder="Correo"></input>
        <input type="password" placeholder="Contraseña"></input>
        <a href="/">¿Olvidaste tu contraseña?</a>
        <button type="submit">Iniciar sesión</button>
        <a href="/" className="center">
          Registrarse
        </a>
      </form>
    </div>
  );
};

export default Home;
