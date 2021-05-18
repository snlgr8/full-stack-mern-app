const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  if (err.code === 11000) {
    const message = 'Email already registered';
    error = new ErrorResponse(message, 400);
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }
  if (err.name === 'Error') {
    error = new ErrorResponse(err.message, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || 'Server error', success: false });
};

module.exports = errorHandler;
