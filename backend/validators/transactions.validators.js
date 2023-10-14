import Joi from "joi";
import { transactionsType, transactionsCategory } from "../utils/constants.js";

const transactionAddSchema = Joi.object({
  // date: Joi.string().required(),
  type: Joi.string()
    .valid(...transactionsType)
    .required(),
  category: Joi.string()
    .valid(...transactionsCategory)
    .required(),
  comment: Joi.string().optional(),
  amount: Joi.number().required(),
  owner: Joi.ref("user"),
  versionKey: false,
  timestamp: true,
});

export const addTransactionValidation = async (req, res, next) => {
  const { transactionPayLoad, type, category } = req.body;
  if (type === "Expense" && category === "Income") {
    return res.status(409).send({
      message: "Transaction category type does not match transaction type",
    });
  }
  if (type === "Income" && category !== "Income") {
    return res.status(409).send({
      message: "Transaction category type does not match transaction type",
    });
  }
  await transactionAddSchema.validateAsync(transactionPayLoad);
  next();
};
