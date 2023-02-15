const getAllTypes = require("../controllers/getAllTypes.js");
const {Tipo} = require("../db.js");

module.exports = async (req, res) => {
  try {
    await getAllTypes().then(async e => {
      let rr = await Tipo.findAll();
      let result = rr.slice(0 , 18);
      res.status(200).send(result);
    }) 
  } catch (error) {
    res.status(400).send(error.message);
  }
};
