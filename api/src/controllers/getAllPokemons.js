const axios = require("axios")


module.exports = async () => {
     const arrPokemos = await axios('https://pokeapi.co/api/v2/pokemon')
         .then(e =>  e.data.results);
    return arrPokemos
};
