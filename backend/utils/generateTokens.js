import jwt from "jsonwebtoken";
import {
  JWT_SECRET,
  JWT_ACCESS_EXPIRE_TIME,
  JWT_REFRESH_EXPIRE_TIME,
} from "../config/config.js";

const generateAccessToken = (id, sessionId) => {
  return jwt.sign({ uid: id, sid: sessionId }, JWT_SECRET, {
    expiresIn: JWT_ACCESS_EXPIRE_TIME,
  });
};

const generateRefreshToken = (id, sessionId) => {
  return jwt.sign({ uid: id, sid: sessionId }, JWT_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRE_TIME,
  });
};

export const generateTokens = (id, sessionId) => {
  const accessToken = generateAccessToken(id, sessionId);
  const refreshToken = generateRefreshToken(id, sessionId);

  return {
    accessToken,
    refreshToken,
  };
};
