import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {
  return (
    <div className="searchbar">
      <FontAwesomeIcon className="white" icon={faSearch} />
      <input type="text" placeholder="Buscar torneo"></input>
    </div>
  );
};

export default Searchbar;
