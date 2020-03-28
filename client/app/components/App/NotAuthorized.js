import React from "react";
import { Link } from "react-router-dom";

import "../../styles/homepage.scss";

const NotFound = () => (
  <div className="homepage not-authorized">
    <img
      className="banner"
      src="https://i.pinimg.com/originals/95/d9/e1/95d9e1d75848bc5b4fd280e1f722f7b5.jpg"
    ></img>
    <div>
      <h2>Not authorized to view this resource</h2>
      <Link to="/">Go home</Link>
    </div>
  </div>
);

export default NotFound;
