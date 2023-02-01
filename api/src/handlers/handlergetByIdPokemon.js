const getByIdPokemon = require("../controllers/getByIdPokemon.js");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getByIdPokemon(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
