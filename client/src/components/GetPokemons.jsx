import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function GetPokemons(props) {
  const [pokemons, setPokemons] = useState([]);

  
  useEffect(() => {
    let url = "http://localhost:3001/pokemons";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.forEach((el) =>
          fetch(el.url)
            .then((e) => e.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              setPokemons((pokemons) => [...pokemons, pokemon]);
            })
        );
      });
  }, []);

  return (
    <>
      <h2>Mostrando los pokemons</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando ...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar}></Pokemon>
        ))
      )}
    </>
  );
}
