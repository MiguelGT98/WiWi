import React from "react";
import { withRouter } from "react-router";
import App from "../../components/App/App";

import "../../styles/landing.scss";

const LandingPage = ({ history }) => {
    const logOut = () => {
        localStorage.removeItem("jwt");
        history.push("/");
    };
    return ( <App>
        <div className = "landing-page"></div>
        </App>
    );
};

export default withRouter(LandingPage);