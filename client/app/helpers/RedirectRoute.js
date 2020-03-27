import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { currentUser } from "../helpers/AuthService";

import React from "react";
import NotAuthorized from "../components/App/NotAuthorized";

const RedirectRoute = ({ component: Component, redirect, exact, path }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (!currentUser()) return <Component></Component>;

        return <Redirect to={redirect} />;
      }}
    />
  );
};

export default RedirectRoute;
