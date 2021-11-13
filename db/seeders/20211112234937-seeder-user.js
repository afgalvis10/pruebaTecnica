'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'andres@correo.com.co',
        password: '1234567809galvis',
        role: 'development',
        create_at: new Date(),
      },
      {
        email: 'felipe@correo.com.co',
        password: '12809galvis',
        role: 'senior',
        create_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
