const getByIdPokemon = require("../controllers/getByIdPokemon.js");
const getAllPokemonsForDb = require("../controllers/getAllPokemonsForDb.js");
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const pokeApi = await getByIdPokemon(id);
    //Veo si no se encontro en la api
    if (pokeApi.length !== 0) {
      res.status(200).json(pokeApi);
    } else {
      //Buscamos en DB
      const pokeDb = await getAllPokemonsForDb();
      let result = pokeDb.find((e) => e.id === id);
      if (result) {
        res.status(200).json(result);
      } else {
        res
          .status(400)
          .json({ err: "Pokemons no encontrado en db y api" });
      }
    }
  } catch (error) {
    res.status(400).json(`Pokemon : ${id}`);
  }
};
