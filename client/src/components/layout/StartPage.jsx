import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
  return (
    <>
      <div className="start-page-conteiner">
        <h1>BIENVENIDOS P.I POKEMONS</h1>
        <button className="btn">
          <Link className="btn-home" to="/home">
            HOME
          </Link>
        </button>
      </div>
    </>
  );
};
