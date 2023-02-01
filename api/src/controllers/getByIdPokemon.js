const axios = require("axios");
//Parametro con i mayuscula.
module.exports = async (Id) =>{
    let res =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${Id}`);
    const {weight,name, height , id,stats } = res.data;
    //Solamente dejamos lo nesesario en stats
    let hp = 0;
    let strength = 0;
    let defence = 0;
    let speed = 0;
    for (let y of stats) {
      switch (y.stat.name) {
        case "hp":
          hp = y.base_stat;
          break;
        case "attack":
          strength = y.base_stat;
          break;
        case "defense":
          defence = y.base_stat;
          break;
        case "speed":
          speed = y.base_stat;
          break;
      }
    }
    return {weight,name, height , id,hp , strength , defence,speed };
}