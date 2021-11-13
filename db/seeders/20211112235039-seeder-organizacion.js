'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizacion', [
      {
        name: 'Andres',
        phone: 1237748,
        typeMove: 'prueba',
        user_id: 1,
        created_at: new Date(),
      },
      {
        name: 'Felipe',
        phone: 12377482,
        typeMove: 'prueba',
        user_id: 1,
        created_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Organizacion', null, {});
  },
};
