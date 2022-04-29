module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define('Avatar', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
  });

  Avatar.associate = (models) => {
    Avatar.hasMany(models.User, { foreignKey: 'avatarId', as: 'users' });
  };

  return Avatar;
};
