const { Sequelize } = require('sequelize');
const setupModels = require('./../db/models/index');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Parametro conexion
const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
});

setupModels(sequelize);

module.exports = sequelize;
