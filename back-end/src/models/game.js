module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
  })
  return Game;
};