import mongoose from "mongoose";
import { transactionsType, transactionsCategory } from "../utils/constants.js";

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: transactionsType,
      required: true,
    },
    category: {
      type: String,
      enum: transactionsCategory,
      required: true,
    },
    comment: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const transactionModel = mongoose.model("Transaction", transactionSchema);

export default transactionModel;
