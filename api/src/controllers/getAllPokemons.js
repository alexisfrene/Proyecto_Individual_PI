const axios = require("axios");

module.exports = async () => {
  return await axios("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      return res.data.results;
    })
    .then(async (res) => {
      let infoPokemons = [];
      for (let index = 0; index < res.length; index++) {
        await axios(res[index].url).then((res) => {
          const { name, id, types, stats, height, weight, sprites } = res.data;
          //Destructuramos la imagen principal
          const img = sprites.front_default;
          //Preguntamos si tiene 2 typos o 1
          const poke_types = [];
          if (types.length === 2) {
            poke_types.push(types[0].type.name);
            poke_types.push(types[1].type.name);
          } else {
            poke_types.push(types[0].type.name);
          }
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

          infoPokemons.push({
            name,
            id,
            poke_types,
            hp,
            strength,
            defence,
            speed,
            height,
            weight,
            img,
          });
        });
      }
      return infoPokemons;
    });
};
