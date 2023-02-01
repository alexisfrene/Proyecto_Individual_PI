const postPokemon = require("../controllers/postPokemon.js");

module.exports = async (req, res) => {
  const data = req.body;

  try {
    const result = await postPokemon(data);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
