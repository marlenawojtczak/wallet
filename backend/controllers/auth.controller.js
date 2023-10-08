import User from "../models/users.model.js";
import { generateTokens } from "../utils/generateTokens.js";

export const singup = async (req, res, next) => {
  const body = req.body;
  const { email } = body;

  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(409)
      .send({ message: `User with ${email} email already exists` });
  }

  const newUser = await User.create({
    ...body,
  });

  return res.status(201).send({
    email,
    id: newUser._id,
  });
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Missing required fields",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(403)
      .send({ message: `User with ${email} email doesn't exist` });
  }

  const passwordIsValid = await user.isValidPassword(password);

  if (!passwordIsValid) {
    return res.status(401).send({
      message: "Password is incorrect",
    });
  }

  const { accessToken, refreshToken } = generateTokens(user._id);

  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

  res.status(200).send({
    message: "Login successful",
    accessToken,
    refreshToken,
    user: {
      email: user.email,
    },
  });
};

export const signout = async (req, res, next) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { accessToken: "", refreshToken: "" });

  res.status(204).end();
};
