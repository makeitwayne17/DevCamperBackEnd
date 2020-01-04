const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // log to console for dev
  console.log(err);

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = `Resource not found with the id of ${err.value}`;
    error = new ErrorResponse(message, 404); //404 means resources not exist
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400); //400 means bad request from client
  }

  // Mongoose Validation
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400); //400 means bad request from client here
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
