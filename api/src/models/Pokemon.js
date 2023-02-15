const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique : true,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      poke_types: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM(
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
            "shadow"
          )
        ),

        allowNull: false,
        //defaultValue: "normal",
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      strength: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      defence: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
