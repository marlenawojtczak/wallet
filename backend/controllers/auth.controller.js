import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import Session from "../models/session.model.js";
import { generateTokens } from "../utils/generateTokens.js";
import { JWT_SECRET } from "../config/config.js";
import { sendVerificationEmail } from "../utils/emailVerification.js";

export const singup = async (req, res, next) => {
  const body = req.body;
  const { email, originDomain } = body;

  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(409)
      .send({ message: `User with ${email} email already exists` });
  }

  const verificationToken = jwt.sign(email, JWT_SECRET);

  const newUser = await User.create({
    ...body,
    verificationToken,
  });

  sendVerificationEmail(
    email,
    verificationToken,
    "Email Verification",
    originDomain
  );

  return res.status(201).send({
    message: "Register successful",
    user: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      balance: newUser.balance,
    },
  });
};

export const verify = async (req, res, next) => {
  const { verificationToken } = req.params;
  const originDomain = req.query.origin;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    return res.status(404).json({
      status: false,
      message: "User Not Found",
    });
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  return res.redirect(`https://${originDomain}`);
};

export const resendVerify = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User Not Found",
      });
    }

    const { verificationToken, verify } = user;

    if (verify)
      return res.status(400).json({
        status: false,
        message: "Verification has already been passed",
      });

    await sendVerificationEmail(email, verificationToken, "Email Verification");
    res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Missing required fields",
    });
  }

  const user = await User.findOne({ email });

  const { verify } = user;

  if (!verify) {
    return res.status(401).send({
      message: "Please verify your email",
    });
  }

  if (!user) {
    return res
      .status(403)
      .send({ message: `User with ${email} email doesn't exist` });
  }

  const passwordIsValid = await user.isValidPassword(password);

  if (!passwordIsValid) {
    return res.status(401).send({
      message: "Password is incorrect",
      verify: user.verify,
      email: user.email,
    });
  }

  const newSession = await Session.create({
    uid: user._id,
  });

  const { accessToken, refreshToken } = generateTokens(
    user._id,
    newSession._id
  );

  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

  res.status(200).send({
    message: "Login successful",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      balance: user.balance,
      accessToken,
      refreshToken,
      verify: user.verify,
    },
    session: {
      sid: newSession._id,
      uid: newSession.uid,
    },
  });
};

export const signout = async (req, res, next) => {
  const currentSession = req.session;
  await Session.deleteOne({ _id: currentSession._id });
  return res.status(204).end();
};

export const refreshTokens = async (req, res, next) => {
  const authorizationHeader = req.get("Authorization");

  if (authorizationHeader) {
    const activeSession = await Session.findById(req.body.sid);
    const reqRefreshToken = authorizationHeader.replace("Bearer ", "");
    const sessionDetail = jwt.verify(reqRefreshToken, JWT_SECRET);

    if (!activeSession) {
      return res.status(404).send({ message: "Invalid session" });
    }

    if (sessionDetail.sid !== req.body.sid) {
      await Session.findByIdAndDelete(req.body.sid);
      return res.status(401).send({ message: "Unauthorized" });
    }

    const user = await User.findById(sessionDetail.uid);
    const session = await Session.findById(sessionDetail.sid);

    if (!user) {
      return res.status(404).send({ message: "Invalid user" });
    }

    if (!session) {
      await Session.findByIdAndDelete(sessionDetail.sid);
      return res.status(404).send({ message: "Invalid session" });
    }

    const newSession = await Session.create({
      uid: user._id,
    });

    const { accessToken, refreshToken } = generateTokens(
      user._id,
      newSession._id
    );

    await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

    return res.status(200).send({
      message: "Token refreshed",
      user: {
        id: user?._id,
        username: user?.username,
        email: User?.email,
        balance: User?.balance,
        accessToken,
        refreshToken,
      },
      session: {
        sid: newSession._id,
        uid: newSession.uid,
      },
    });
  }
  return res.status(400).send({ message: "No token provided" });
};
