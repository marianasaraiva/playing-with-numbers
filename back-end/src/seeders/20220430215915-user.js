'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        nickname: 'Maria',
        password: '123456',
        avatar_id: 1,
      },
      {
        id: 2,
        nickname: 'João',
        password: '123456',
        avatar_id: 2,
      },
      {
        id: 3,
        nickname: 'Mari',
        password: '123456',
        avatar_id: 3,
      },
      {
        id: 4,
        nickname: 'Tata',
        password: '123456',
        avatar_id: 4,
      },
      {
        id: 5,
        nickname: 'Re',
        password: '123456',
        avatar_id: 5,
      },
      {
        id: 6,
        nickname: 'Nath',
        password: '123456',
        avatar_id: 6,
      },
      {
        id: 7,
        nickname: 'Anaua',
        password: '123456',
        avatar_id: 7,
      },
      {
        id: 8,
        nickname: 'Dani',
        password: '123456',
        avatar_id: 8,
      },
      {
        id: 9,
        nickname: 'Rai',
        password: '123456',
        avatar_id: 9,
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
