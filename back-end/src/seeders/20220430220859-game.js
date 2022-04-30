'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Games', [
      {
        id: 1,
        name: 'Sum',
      },
      {
        id: 2,
        name: 'Substraction',
      },
      {
        id: 3,
        name: 'Division',
      },
      {
        id: 4,
        name: 'Multiplication',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  }
};