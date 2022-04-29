module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nickname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    avatarId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'avatar_id',
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.belongsTo(models.Avatar, { foreignKey: 'avatarId', as: 'avatar' });
  };

  return User;
};