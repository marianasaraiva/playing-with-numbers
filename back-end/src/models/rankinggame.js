module.exports = (sequelize, DataTypes) => {
  const RankingGame = sequelize.define('RankingGame', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    gameId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'game_id',
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING,
      foreignKey: true,
      field: 'user_id',
    }
  },
  {
    timestamps: false, 
    tableName: 'RankingGames',
  });

  RankingGame.associate = (models) => {
    models.User.belongsToMany(models.Game, {
      as: 'games',
      through: RankingGame,
      foreignKey: 'userId',
      otherKey: 'gameId',
    });

    models.Game.belongsToMany(models.User, {
      as: 'users',
      through: RankingGame,
      foreignKey: 'gameId',
      otherKey: 'userId',
    });
  };

  return RankingGame;
};