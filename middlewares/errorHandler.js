// note Found

const notFound = (req, res, next) => {
  const error = new Error(`Note Found: ${req.originalUrl}`);
  res.statatus(404);
  next(error);
};

//ErroHandler

const errorHandler = (err, req, res, next) => {
  const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statuscode);
  res.json({
    messege: err?.messege,
    stack: err?.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
