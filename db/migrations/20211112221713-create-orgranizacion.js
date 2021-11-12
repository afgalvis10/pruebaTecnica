'use strict';

const {
  ORGANIZACION_TABLE,
  OrganizacionSchema,
} = require('./../models/organizacion.model');

const { USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(ORGANIZACION_TABLE, OrganizacionSchema);
    await queryInterface.addConstraint(ORGANIZACION_TABLE, {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_userId',
      references: {
        table: USER_TABLE,
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(ORGANIZACION_TABLE);
  },
};
