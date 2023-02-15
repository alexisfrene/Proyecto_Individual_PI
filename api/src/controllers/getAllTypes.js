const axios = require("axios");
const { Tipo } = require("../db.js");
const imgTipos =require("../tools/typesUrlImg.js");
module.exports = async () => {
  const result = await axios("https://pokeapi.co/api/v2/type");
  
  const { results } = result.data;
  const types = results.map((e) => e.name);

  for (let i = 0; i < types.length; i++) {
    for(let y in imgTipos){
      if(y === types[i]){
        await Tipo.create({ name: types[i] , typeImg:imgTipos[y]});
      }
    }
  };
  

  return "OK";
};
