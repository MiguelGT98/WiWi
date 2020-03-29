import React, { useState, useEffect } from "react";
import { decodeUser } from "../../../helpers/AuthService";
import App from "../../../components/App/App";
import { withRouter } from "react-router";

import "whatwg-fetch";

import "../../../styles/user/profile.scss";
import Sidebar from "../../../components/User/Sidebar";

const ProfilePage = ({ history, children }) => {
  const [user, setUser] = useState({});

  const fetchUserData = () => {
    const { id } = decodeUser();

    fetch(`/api/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        const { user } = json;
        console.log(user);
        setUser(user);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const logOut = () => {
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { user: user })
  );

  return (
    <App>
      <div className="wrapper profile">
        <Sidebar user={user} logOut={logOut}></Sidebar>
        {childrenWithProps}
      </div>
    </App>
  );
};

export default withRouter(ProfilePage);
