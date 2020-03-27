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
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
