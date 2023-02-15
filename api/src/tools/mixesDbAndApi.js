const getAllPokemonsForDb = require("../controllers/getAllPokemonsForDb.js");

module.exports =async (resApi) => {
  const pokeDb = await getAllPokemonsForDb();
  let result = [];
  let pokeApi;
  if(Array.isArray(resApi)){
    pokeApi = resApi
  }else{
    pokeApi = [];
    pokeApi.push(resApi);
  }
    
    
    
    
    if (!pokeDb) {
      result = pokeApi;
      return result;
    } else {
      result = [...pokeApi, ...pokeDb];
      return result;
    };

    
}