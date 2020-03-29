import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { currentUser } from "../helpers/AuthService";

import React from "react";
import NotAuthorized from "../components/App/NotAuthorized";

const ProtectedRoute = ({ component: Component, exact, path, children }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        if (currentUser()) return <Component>{children}</Component>;

        return <NotAuthorized />;
      }}
    />
  );
};

export default ProtectedRoute;
