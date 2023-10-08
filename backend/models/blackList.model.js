import mongoose from "mongoose";
import { JWT_EXPIRES_IN } from "../config/config.js";

const blackListSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: JWT_EXPIRES_IN,
  },
});

const balckListModel = mongoose.model("BlackList", blackListSchema);

export default balckListModel;
