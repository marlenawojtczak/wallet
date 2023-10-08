import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_ACCESS_EXPIRE_TIME = process.env.JWT_ACCESS_EXPIRE_TIME;
export const JWT_REFRESH_EXPIRE_TIME = process.env.JWT_REFRESH_EXPIRE_TIME;
export const MONGODB_URI = process.env.MONGODB_URI;
