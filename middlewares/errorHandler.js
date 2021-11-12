const boom = require('@hapi/boom');
const debug = require('debug')('app:error');

function logErrors(err, req, res, next) {
  debug(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode).json(payload);
}

module.exports = { logErrors, wrapErrors, errorHandler };
