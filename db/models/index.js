const { User, UserSchema } = require('./user.model');
const { Organizacion, OrganizacionSchema } = require('./organizacion.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Organizacion.init(OrganizacionSchema, Organizacion.config(sequelize));

  User.associate(sequelize.models);
  Organizacion.associate(sequelize.models);
}

module.exports = setupModels;
