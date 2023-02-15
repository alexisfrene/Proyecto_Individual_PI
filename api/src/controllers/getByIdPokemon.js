const axios = require("axios");
const cleanDataPokemons = require("../tools/cleanDataPokemons.js");

module.exports = async (Id) => {
  try {
    let res = await axios(`https://pokeapi.co/api/v2/pokemon/${Id}`);
    let cleanData = cleanDataPokemons(res);
    return cleanData;
  } catch (error) {
    return [];
  }
};
