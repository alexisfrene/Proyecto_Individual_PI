const { default: axios } = require("axios");
const { Router } = require("express");

//Pokemon por id y por name 1 solo pokemon
const handlergetByIdPokemon = require("../handlers/handlergetByIdPokemon.js");
//Todos los pokemons de la API y la DB
const handlerGetPokemons = require("../handlers/handlerGetPokemons.js");
//Crear
const handlerCreatePokemon = require("../handlers/handlerCreatePokemon.js");

const router = Router();

router.get("/", handlerGetPokemons);
//Buscar por id paramans
router.get("/:id", handlergetByIdPokemon);
//Crear pokemon
router.post("/", handlerCreatePokemon);

module.exports = router;
