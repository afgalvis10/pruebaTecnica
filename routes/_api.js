const productsRouter = require('./products');
const usersRouter = require('./users');
const organizacionRouter = require('./organizacion');

function Api(app) {
  productsRouter(app);
  usersRouter(app);
  organizacionRouter(app);
}

module.exports = Api;
