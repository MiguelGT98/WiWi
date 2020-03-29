import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NotFound from "./components/App/NotFound";

import Home from "./pages/Home/Home";

import "./styles/styles.scss";
import RegisterPage from "./pages/Register/Register";
import ProtectedRoute from "./helpers/ProtectedRoute";
import LandingPage from "./pages/User/LandingPage";
import RedirectRoute from "./helpers/RedirectRoute";

import TournamentHome from "./pages/Tournaments/tournamentHome";
import TournamentDetail from "./pages/Tournaments/TournamentDetail";
import TournamentNew from "./pages/Tournaments/TournamentNew";
import ProfilePage from "./pages/User/Profile/ProfilePage";
import Tournaments from "./components/User/Tournaments";
import Trophies from "./components/User/Trophies";
import Bets from "./components/User/Bets";
import MyInformation from "./components/User/MyInformation";
import PaymentMethods from "./components/User/PaymentMethods";
import MyTournaments from "./components/User/MyTournaments";

render(
  <Router>
    <Switch>
      <RedirectRoute exact={true} path="/" component={Home} redirect="/app" />
      <RedirectRoute
        exact={true}
        path="/registro"
        component={RegisterPage}
        redirect="/app"
      />
      <ProtectedRoute
        exact={true}
        path="/app"
        component={LandingPage}
      ></ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/perfil/torneos"
        component={ProfilePage}
      >
        <Tournaments></Tournaments>
      </ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/perfil/trofeos"
        component={ProfilePage}
      >
        <Trophies></Trophies>
      </ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/perfil/apuestas"
        component={ProfilePage}
      >
        <Bets></Bets>
      </ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/perfil/informacion"
        component={ProfilePage}
      >
        <MyInformation></MyInformation>
      </ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/perfil/metodos-de-pago"
        component={ProfilePage}
      >
        <PaymentMethods></PaymentMethods>
      </ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/perfil/mis-torneos"
        component={ProfilePage}
      >
        <MyTournaments></MyTournaments>
      </ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/app/torneos"
        component={TournamentHome}
      ></ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/app/torneos/add"
        component={TournamentHome}
      ></ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/app/torneos/:id"
        component={TournamentDetail}
      ></ProtectedRoute>
      <ProtectedRoute
        exact={true}
        path="/app/add/torneos"
        component={TournamentNew}
      ></ProtectedRoute>
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
