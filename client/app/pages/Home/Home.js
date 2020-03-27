import React from "react";

import "../../styles/homepage.scss";
import LoginForm from "../../components/Authentication/Forms/Login";

const Home = () => {
  return (
    <div className="homepage">
      <img
        className="banner"
        src="https://i.pinimg.com/originals/95/d9/e1/95d9e1d75848bc5b4fd280e1f722f7b5.jpg"
      ></img>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Home;
