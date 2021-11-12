const express = require('express');
const Service = require('./../services/products');

function Api(app) {
  const router = express.Router();
  app.use('/products', router);
  const service = new Service();

  router.get('/', async (req, res, next) => {
    try {
      const products = await service.find();
      res.json(products);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.json(newProduct);
    } catch (error) {
      next(error);
    }
  });

  router.patch('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  });
}

module.exports = Api;
