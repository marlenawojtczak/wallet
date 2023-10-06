import Joi from "joi";
import { transactionsType, transactionsCategory } from "../utils/constants.js";

const transactionAddSchema = Joi.object({
  transactionDate: Joi.date().required(),
  type: Joi.string()
    .valid(...transactionsType)
    .required(),
  categoryId: Joi.string()
    .valid(...transactionsCategory)
    .required(),
  comment: Joi.string().optional(),
  amount: Joi.number().required(),
  balanceAfter: Joi.number().optional(),
  owner: Joi.ref("user"),
  versionKey: false,
  timestamp: true,
});

export const addTransactionValidation = async (req, res, next) => {
  const { transactionPayLoad } = req.body;
  await transactionAddSchema.validateAsync(transactionPayLoad);
  next();
};
