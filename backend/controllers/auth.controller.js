import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import { JWT_SECRET } from "../config/config.js";

export const singup = async (req, res, next) => {
  try {
    const body = req.body;
    const { email } = body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({
        status: false,
        message: "User with this email already exists",
      });
    }

    const verificationToken = jwt.sign(email, JWT_SECRET);

    const newUser = await User.create({
      ...body,
      verificationToken,
    });

    return res.status(201).json({
      status: true,
      email: newUser.email,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
