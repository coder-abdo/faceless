import { ErrorRequestHandler } from "express";

export const errMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { status = 500, message = "something went wrong" } = err;
  res.status(status).send(message);
};

