//import axios from "axios";
const { Pokemon } = require("../db.js");

module.exports = async () => {
  let result = await Pokemon.findAll();
  if (!result) return [];
  return result;
};
