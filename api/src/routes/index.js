const { default: axios } = require('axios');
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllPokemons = require("../controllers/getAllPokemons.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/" , async (req , res) => {

    try {
      const result = await getAllPokemons();
      
        
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
});



module.exports = router;
