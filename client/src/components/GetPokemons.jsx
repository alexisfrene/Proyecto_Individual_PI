//import React, { useState, useEffect } from "react";
import { CardPokemon } from "./CardPokemon";

export const GetPokemons = ({ data }) => {
  return (
    <>
      <div>Hola</div>
      {data.length === 0
        ? "CARGANDO POKEMONS"
        : data.map((e) => {
            return  (
              <CardPokemon name={e.name} types={e.poke_types} img={e.img} />
            );
          })}
    </>
  );
};
