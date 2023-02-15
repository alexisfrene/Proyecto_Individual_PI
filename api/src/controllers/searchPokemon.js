//const axios = require("axios");
const axios = require("axios");
const cleanDataPokemons = require("../tools/cleanDataPokemons.js");
const getAllPokemonsForDb = require("./getAllPokemonsForDb.js");
module.exports = async (name) => {
  let lowCaseName = name.toLowerCase();
  let pokemosnForApi = await axios(
    ` https://pokeapi.co/api/v2/pokemon/${lowCaseName}`
  )
    .then((res) => {
      let result = cleanDataPokemons(res);
      return result;
    })
    .catch((err) => {
      
      return [];
    });

  if (pokemosnForApi.length !== 0) {
    return pokemosnForApi;
  } else {
    let pokemonsForDb = await getAllPokemonsForDb();
    let result = pokemonsForDb.find((e) => {
      if (e.name === lowCaseName) return true;
    });
    if (result === undefined) {
      return [];
    }

    return result;
  }
};
