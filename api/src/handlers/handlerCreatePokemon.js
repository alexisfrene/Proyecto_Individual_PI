//Crear pokemon
const postPokemon = require("../controllers/postPokemon.js");

module.exports = async (req, res) => {
  const data = req.body;
  try {
    if (data) {
      const {
        name,
        weight,
        poke_types,
        height,
        hp,
        strength,
        defence,
        speed,
        img,
      } = data;

      if (typeof name === "string" && name.length <= 10) {
        if (typeof img === "string") {
          for (let i of [weight, height, hp, strength, defence, speed]) {
            if (typeof i !== "number")
              return res
                .status(400)
                .json({ error: "Tipo de datos llegando mal, number" });
          }
          if (Array.isArray(poke_types) && poke_types.length >= 1) {
            const result = await postPokemon(data);
            if(result === "el nombre ya esta en uso") return res.status(400).json("el nombre ya esta en uso")
              return  res.status(200).json(result);
          }
          return res
            .status(400)
            .json({ error: "Error en los tipos de pokemons" });
        }
      }
      return res.status(400).json({ error: "Error al ingresar el nombre" });
    } else {
      return res.status(400).json({ error: "No a llegado la data" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
