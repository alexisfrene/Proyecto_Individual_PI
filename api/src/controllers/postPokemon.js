const { Pokemon } = require("../db.js");

module.exports = async (data) => {
  const {
    id,
    name,
    poke_types,
    hp,
    strength,
    defence,
    speed,
    height,
    weight,
    img,
  } = data;
  if (
    ![
      name,
      poke_types,
      hp,
      strength,
      defence,
      speed,
      height,
      weight,
      img,
    ].every(Boolean)
  )
    throw new Error("Faltan datos papurri");

  await Pokemon.create({
    id,
    name,
    poke_types,
    hp,
    strength,
    defence,
    speed,
    height,
    weight,
    img,
  });
  return "Pokemon Creado";
};
