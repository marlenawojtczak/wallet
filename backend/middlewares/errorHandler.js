export const errorHandler = (error, req, res, next) => {
  if (error.message === "data and hash arguments required") {
    return res.status(403).send({
      message: "Please provide password",
    });
  }

  if (error.source === "jwt middleware error") {
    return res.status(403).send({
      message: "Invalid token",
    });
  }

  res.status(error.status || 400).send({
    message: error.message,
  });

  next();
};
