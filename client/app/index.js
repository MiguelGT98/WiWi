import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";

import Home from "./pages/Home/Home";

import "./styles/styles.scss";
import RegisterPage from "./pages/Register/Register";

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registro" component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
