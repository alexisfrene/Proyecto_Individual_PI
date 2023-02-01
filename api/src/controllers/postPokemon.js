const {Pokemon} = require("../db.js");

module.exports = async (data) =>{


    const{id , name , poke_types , hp , strength , defence , speed , height , weight} = data;
    if(![name , poke_types , hp , strength , defence , speed , height , weight].every(Boolean)) throw new Error("Faltan datos papurri");

//let types = poke_types[0];

    await Pokemon.create({id , name , poke_types , hp , strength , defence , speed , height , weight});
    return "Pokemon Creado"
}