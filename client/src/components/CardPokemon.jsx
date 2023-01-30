import React from "react";

export const CardPokemon = ({pokemons}) => {
    function seeAllPokemons ( name , types , img ){
        return "Algo"
    }

  return (
    <div>
      <h1> {pokemons[0].name} </h1>
      <h2>
        {pokemons[0].poke_types.length !== 2
          ? pokemons[0].poke_types[0]
          : `Dos tipo : ${pokemons[0].poke_types[0]} y ${pokemons[0].poke_types[1]}`}
      </h2>
      <img src={pokemons[0].img} alt={pokemons[0].name} />
    </div>
  );
};
