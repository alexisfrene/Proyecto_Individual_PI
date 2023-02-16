const { Pokemon } = require("../db.js");
const axios = require("axios");

async function verifyName(name){

 let result =  await axios(`http://localhost:3001/pokemons/?name=${name}`);
 return result

}


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

let result = await verifyName(name);
if(result.data.length === 0 ){
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
}else{
  return "el nombre ya esta en uso"
}

  

};
