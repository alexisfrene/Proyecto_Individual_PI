const { default: axios } = require("axios");
const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const handlergetByIdPokemon = require("../handlers/handlergetByIdPokemon.js");
const handlerGetPokemons = require("../handlers/handlerGetPokemons.js");
const handlerCreatePokemon = require("../handlers/handlerCreatePokemon.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//Get all y get por name
router.get("/", handlerGetPokemons);
//Buscar por id paramans
router.get("/:id", handlergetByIdPokemon);
//Crear pokemon
router.post("/", handlerCreatePokemon);

module.exports = router;
