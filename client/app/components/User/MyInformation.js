import React from "react";

const MyInformation = ({ user }) => {
  console.log(user);
  return (
    <div className="my-information">
      <h2>Mi información</h2>
      <form>
        <input disabled type="text" value={user.username}></input>
        <input type="email" value={user.email}></input>
        <button type="submit">Actualizar datos</button>
      </form>
    </div>
  );
};

export default MyInformation;
