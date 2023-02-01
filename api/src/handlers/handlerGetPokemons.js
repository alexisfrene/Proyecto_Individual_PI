const getAllPokemons = require("../controllers/getAllPokemons.js");
const getAllPokemonsForDb = require("../controllers/getAllPokemonsForDb.js");
module.exports = async (req, res) => {
  try {
    const pokeApi = await getAllPokemons();
    const pokeDb = await getAllPokemonsForDb();
    let result =[];
    if(!pokeDb){
      result = pokeApi;
    }else{
      result = [...pokeApi , ...pokeDb];
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
