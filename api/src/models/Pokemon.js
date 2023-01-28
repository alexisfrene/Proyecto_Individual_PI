const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true,
    },
    types: {
      type: DataTypes.ENUM([
        "normal",
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark",
        "fairy",
        "unknown",
        "shadow",
      ]),
      allowNull:false
    },
    hp :{
      type : DataTypes.INTEGER,
      allowNull:false
    },
    strength :{
      type : DataTypes.INTEGER,
      allowNull:false
    },

    defence :{
      type : DataTypes.INTEGER,
      allowNull:false
    },
    speed :{
      type : DataTypes.INTEGER,
      allowNull:false
    },
    height :{
      type : DataTypes.INTEGER,
      allowNull:false
    },
    weight :{
      type : DataTypes.INTEGER,
      allowNull:false
    },
    
  });
};
