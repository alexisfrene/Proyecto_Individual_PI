const { default: axios } = require("axios");
const { Router } = require("express");
const handlerPokeType = require("../handlers/handlerPokeType.js");

const routerTypes = Router();

routerTypes.get("/types", handlerPokeType);

 module.exports = routerTypes;