import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { currentUser } from "../helpers/AuthService";

import React from "react";
import NotAuthorized from "../components/App/NotAuthorized";

const ProtectedRoute = ({ component: Component }) => {
  return (
    <Route
      render={() => {
        if (currentUser()) return <Component></Component>;

        return <NotAuthorized />;
      }}
    />
  );
};

export default ProtectedRoute;
