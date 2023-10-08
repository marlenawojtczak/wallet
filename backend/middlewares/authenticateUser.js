import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import Session from "../models/session.model.js";
import { JWT_SECRET } from "../config/config.js";

export const authenticateUser = async (req, res, next) => {
  const authorizationHeader = req.get("Authorization");

  if (authorizationHeader) {
    const accessToken = req.header("Authorization").split(" ")[1];
    const userDetails = jwt.verify(accessToken, JWT_SECRET);

    if (!accessToken) {
      return res.status(401).send({
        message: "Not authorized",
      });
    }

    const user = await User.findById(userDetails.uid);
    const session = await Session.findById(userDetails.sid);

    if (!user) {
      return res.status(404).send({ message: "Invalid user" });
    }

    if (!session) {
      return res.status(404).send({ message: "Invalid session" });
    }

    req.user = user;
    req.session = session;
    next();
  } else return res.status(400).send({ message: "No token provided" });
};
