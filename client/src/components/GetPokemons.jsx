import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardPokemon } from "./CardPokemon";
export const GetPokemons = () => {
  let [pokemons, setPokemons] = useState([]);

  async function getData() {
    let res = await axios.get("http://localhost:3001/pokemons");
    const { data } = res;
    setPokemons((e) => data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>Hola</div>
      {
        pokemons.length === 0 ? "CARGANDO POKEMONS" : <CardPokemon pokemons={pokemons} />
      }
    </>
  );
};
