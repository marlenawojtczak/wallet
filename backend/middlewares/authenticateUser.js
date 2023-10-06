import User from "../models/users.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const authenticateUser = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({
      message: "Not authorized",
    });
  }

  req.token = authorization.split(" ")[1];

  const userDetailsFromToken = jwt.verify(req.token, JWT_SECRET);
  const user = await User.findById(userDetailsFromToken._id);

  req.user = user;
  next();
};
