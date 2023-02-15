module.exports = (res) => {
  const { weight, name, height, stats, types, id , sprites } = res.data;

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
  };

let img = sprites.other.dream_world.front_default;

if(img === null){
  img = sprites.other.home.front_default;
  if(img === null){
    img = sprites.front_default;
  }
};

  return { name, poke_types, hp, strength, defence, speed, height, weight, id , img  };
};
