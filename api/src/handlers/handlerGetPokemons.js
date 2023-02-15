const getAllPokemons = require("../controllers/getAllPokemons.js");
const searchPokemon = require("../controllers/searchPokemon.js");
const mixesDbAndApi = require("../tools/mixesDbAndApi.js");

module.exports = async (req, res) => {
  const name = req.query.name;
  try {
    if (name) {
      const result = await searchPokemon(name);
      return res.status(200).json(result);
    }

    const pokeApi = await getAllPokemons();
    let result = await mixesDbAndApi(pokeApi);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
