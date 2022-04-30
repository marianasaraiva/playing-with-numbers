'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Avatars', [
      {
        id: 1,
        name: 'Coelhinha',
        url: 'https://64.media.tumblr.com/1da227a294f7c5db1f3eea13586541d6/8f9f3f1597f92636-fe/s400x600/6930cb24c919e511c63bdd4266fc5292dc6cb3f0.pnj'
      },
      {
        id: 2,
        name: 'Girafa',
        url: 'https://64.media.tumblr.com/ac7e484abcebd159889a5d522f70448a/8f9f3f1597f92636-0e/s400x600/4947b0395b47f3bfc12b38e46d6c83283cbb7cc2.pnj'
      },
      {
        id: 3,
        name: 'Guaxinim',
        url: 'https://64.media.tumblr.com/0c5e53e0fdeb095f5da5b872b94ba903/8f9f3f1597f92636-03/s400x600/1547ada14f621251b46f3ed20014c15cfdd9524d.pnj'
      },
      {
        id: 4,
        name: 'Hipo',
        url: 'https://64.media.tumblr.com/2664d20a1aff6be2d24f12aa117a5fbc/8f9f3f1597f92636-c8/s400x600/cfe1495d17488b7d3333ed378b202ab705e74204.pnj'
      },
      {
        id: 5,
        name: 'Leo',
        url: 'https://64.media.tumblr.com/0936c390723e355e909efe2786852cad/8f9f3f1597f92636-54/s400x600/ed9e859bf2a5ebd61426b2c9fd50756f54d69da1.pnj'
      },
      {
        id: 6,
        name: 'Panda',
        url: 'https://64.media.tumblr.com/49a67fcbc3530859030392d16157907c/8f9f3f1597f92636-4b/s400x600/349e9561956c77348c88560b55a046291c187d96.pnj'
      },
      {
        id: 7,
        name: 'Pig',
        url: 'https://64.media.tumblr.com/26d5a15e2554f5493029f49c8cb75e79/8f9f3f1597f92636-76/s400x600/12fa769ac5be9fb5f24e5d232983c4fc7a72810d.pnj'
      },
      {
        id: 8,
        name: 'Pinguim',
        url: 'https://64.media.tumblr.com/a7fe3868b1775d00f25aec199c272d22/8f9f3f1597f92636-60/s400x600/025ae388867f733ba9871f22d8858e40b4fe37d6.pnj'
      },
      {
        id: 9,
        name: 'Raposa',
        url: 'https://64.media.tumblr.com/55a5a64b0cbdc0e02b785d7a1ebd83f1/8f9f3f1597f92636-9c/s400x600/8234af8b9973f3148e585b86465be5ec08d1782c.pnj'
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Avatars', null, {});
  }
};
