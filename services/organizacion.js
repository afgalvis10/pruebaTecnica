const { boom } = require('@hapi/boom');

const { models } = require('../lib/sequelize');

class Service {
  constructor() {}

  async create(data) {
    const newOrganizacion = await models.Organizacion.create(data, {
      include: ['user'],
    });
    return newOrganizacion;
  }

  async find() {
    const rta = await models.Organizacion.findAll({
      include: ['user'],
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Organizacion.findByPk(id);
    if (!user) {
      throw boom.notFound('User notFound');
    }
    return user;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}

module.exports = Service;
