import React from "react";

import "../../styles/user/sidebar.scss";
import { NavLink, withRouter } from "react-router-dom";

const Sidebar = ({ user, logOut, location }) => {
  const getNavLinkClass = path => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="sidebar-menu">
      <div className="banner">
        <img src="https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg"></img>
        <img
          class="avatar"
          title={user.username}
          alt={user.username}
          src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        ></img>
      </div>
      <ul>
        <li className="section-title">Torneos</li>
        <li className={getNavLinkClass("/perfil/torneos")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z"
            />
          </svg>
          <NavLink to="/perfil/torneos">Mis torneos</NavLink>
        </li>
        <li className={getNavLinkClass("/perfil/trofeos")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M11 20v-2.08a6 6 0 0 1-4.24-3A4.02 4.02 0 0 1 2 11V6c0-1.1.9-2 2-2h2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v5a4 4 0 0 1-4.76 3.93A6 6 0 0 1 13 17.92V20h4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h4zm6.92-7H18a2 2 0 0 0 2-2V6h-2v6c0 .34-.03.67-.08 1zM6.08 13A6.04 6.04 0 0 1 6 12V6H4v5a2 2 0 0 0 2.08 2zM8 4v8a4 4 0 1 0 8 0V4H8z"
            />
          </svg>
          <NavLink to="/perfil/trofeos">Mis trofeos</NavLink>
        </li>
        <li className={getNavLinkClass("/perfil/apuestas")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"
            />
          </svg>
          <NavLink to="/perfil/apuestas">Mis apuestas</NavLink>
        </li>
        <li className="section-title">Organizador</li>
        <li className={getNavLinkClass("/perfil/mis-torneos")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M17 22a2 2 0 0 1-2-2v-1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3H5a3 3 0 1 1 0-6h1V8c0-1.11.9-2 2-2h3V5a3 3 0 1 1 6 0v1h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3zm3-2v-3h-1a3 3 0 1 1 0-6h1V8h-3a2 2 0 0 1-2-2V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8v3a2 2 0 0 1-2 2H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3h3v-1a3 3 0 1 1 6 0v1h3z"
            />
          </svg>
          <NavLink to="/perfil/mis-torneos">Mis torneos</NavLink>
        </li>
        <li className="section-title">Mi cuenta</li>
        <li className={getNavLinkClass("/perfil/informacion")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <NavLink to="/perfil/informacion">Mi información</NavLink>
        </li>
        <li className={getNavLinkClass("/perfil/metodos-de-pago")}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXNavLink="http://www.w3.org/1999/xNavLink"
            x="0px"
            y="0px"
            width="63.665px"
            height="63.664px"
            viewBox="0 0 63.665 63.664"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M4.167,52.145h55.331c2.298,0,4.167-1.895,4.167-4.222V15.741c0-2.328-1.869-4.222-4.167-4.222H4.167
			C1.869,11.52,0,13.413,0,15.741v32.182C0,50.25,1.869,52.145,4.167,52.145z M61.582,47.923c0,1.179-0.936,2.139-2.084,2.139H4.167
			c-1.149,0-2.083-0.96-2.083-2.139v-2.462h59.499V47.923z M2.083,15.741c0-1.179,0.935-2.138,2.083-2.138h55.331
			c1.148,0,2.084,0.959,2.084,2.138v19.302H2.083V15.741z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <NavLink to="/perfil/metodos-de-pago">Mis métodos de pago</NavLink>
        </li>
        <li onClick={logOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
            />
          </svg>
          Cerrar sesión
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Sidebar);
