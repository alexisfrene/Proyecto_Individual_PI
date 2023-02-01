//import axios from "axios";
const {Pokemon}  = require("../db.js");


module.exports = async () => {
// let User = Pokemon;
//    // Find all users
// const users = await User.findAll();
// console.log(users.every(user => user instanceof User)); // true
// console.log("All users:", JSON.stringify(users, null, 2));
let result = await Pokemon.findAll();

//console.log(ddd.dataValues)
if(!result) return false;
return result;


}
