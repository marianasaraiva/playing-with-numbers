'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('RankingGames', [
      {
        id: 1,
        score: 98, 
        game_id: 1,
        user_id: 9,
      },
      {
        id: 2,
        score: 72, 
        game_id: 2,
        user_id: 8,
      },
      {
        id: 3,
        score: 51, 
        game_id: 3,
        user_id: 7,
      },
      {
        id: 4,
        score: 64, 
        game_id: 4,
        user_id: 6,
      },
      {
        id: 5,
        score: 82, 
        game_id: 1,
        user_id: 5,
      },
      {
        id: 6,
        score: 78, 
        game_id: 2,
        user_id: 4,
      },
      {
        id: 7,
        score: 35, 
        game_id: 3,
        user_id: 3,
      },
      {
        id: 8,
        score: 99, 
        game_id: 4,
        user_id: 2,
      },
      {
        id: 9,
        score: 45, 
        game_id: 1,
        user_id: 1,
      },
      {
        id: 10,
        score: 68, 
        game_id: 2,
        user_id: 9,
      },
      {
        id: 11,
        score: 75, 
        game_id: 3,
        user_id: 8,
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('RankingGames', null, {});
  }
};