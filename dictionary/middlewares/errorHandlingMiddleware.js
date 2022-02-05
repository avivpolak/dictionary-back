const errorHandlingMiddleware = (error, req, res, next) => {
 
    return res.status(500).json({ error: error.message });
  

  //   If i dont know how to handle -> pass error to default express error handler
  next(error);
};

module.exports = errorHandlingMiddleware;
