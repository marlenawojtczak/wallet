import jwt from "jsonwebtoken";

import {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
} from "../config/config.js";

const generateAccessToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id, type: "refresh" }, JWT_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });
};

export const generateTokens = (id) => {
  const accessToken = generateAccessToken(id);
  const refreshToken = generateRefreshToken(id);

  return {
    accessToken,
    refreshToken,
  };
};
