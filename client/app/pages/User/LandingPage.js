import React from "react";
import { withRouter } from "react-router";

import "../../styles/landing.scss";

const LandingPage = ({ history }) => {
  const logOut = () => {
    localStorage.removeItem("jwt");
    history.push("/");
  };
  return (
    <div className="landing-page">
      Landing
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default withRouter(LandingPage);
