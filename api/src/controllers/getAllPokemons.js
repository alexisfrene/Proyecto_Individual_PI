const axios = require("axios");
const cleanDataPokemons = require("../tools/cleanDataPokemons.js");
module.exports = async () => {
  return await axios("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40")
    .then((res) => {
      return res.data.results;
    })
    .then(async (res) => {
      let infoPokemons = [];
      for (let index = 0; index < res.length; index++) {
        await axios(res[index].url).then((res) => {
          let result = cleanDataPokemons(res);
          infoPokemons.push(result);
        });
      }
      return infoPokemons;
    });
};
