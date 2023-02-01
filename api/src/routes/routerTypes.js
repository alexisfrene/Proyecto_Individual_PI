const { default: axios } = require("axios");
const { Router } = require("express");
const handlerGetTypes = require("../handlers/handlerGetTypes.js");

const routerTypes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routerTypes.get("/", handlerGetTypes);

module.exports = routerTypes;