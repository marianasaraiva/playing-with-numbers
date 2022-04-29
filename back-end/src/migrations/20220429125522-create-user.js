'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      avatar_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Avatars',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
  }
};