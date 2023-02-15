const { Router } = require("express");
const handlerPokeType = require("../handlers/handlerPokeType.js");
const routerPokeType = Router();

routerPokeType.get("/" , handlerPokeType);

module.exports = routerPokeType;
