import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { decodeUser } from "../../helpers/AuthService";

const App = ({ children }) => {
  return (
    <>
      <Header user={decodeUser()}></Header>
      <main>{children}</main>
    </>
  );
};

export default App;
