import React from "react";

import Searchbar from "./Searchbar";
import Links from "./Links";

const Header = ({ user }) => (
  <nav>
    <Searchbar></Searchbar>
    <Links user={user}></Links>
  </nav>
);

export default Header;
