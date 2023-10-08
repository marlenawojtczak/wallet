import mongoose from "mongoose";
import { MONGODB_URI } from "../config/config.js";

export const connectToMongoDB = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB successfully");
};

export const disconnected = async () => {
  await mongoose.connection.close(
    "disconnected",
    console.log("Disconnected from MongoDB")
  );
};
