import React from "react";
import RegisterForm from "../../components/Authentication/Forms/Register";
import "../../styles/homepage.scss";

const RegisterPage = () => {
  return (
    <div className="homepage">
      <img
        className="banner"
        src="https://images.nintendolife.com/a04d0d034e391/smash.original.jpg"
      ></img>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default RegisterPage;
