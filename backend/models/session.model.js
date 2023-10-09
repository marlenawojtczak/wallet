import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  uid: mongoose.Types.ObjectId,
});

const sessionModel = mongoose.model("Session", sessionSchema);

export default sessionModel;
