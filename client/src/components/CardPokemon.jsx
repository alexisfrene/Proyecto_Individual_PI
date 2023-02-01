import React from "react";

export const CardPokemon = ({ name, types, img }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <h2>
        {types.length > 1
          ? `Pokemon con tipos : ${types[0]} y ${types[1]}.`
          : `Pokemon con tipo : ${types[0]}`}
      </h2>
    </div>
  );
};
