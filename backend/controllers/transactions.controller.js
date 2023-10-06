import Transaction from "../models/transactions.model.js";

export const addTransaction = async (req, res, next) => {
  const { body } = req;
  const { _id: owner } = req.user;
  const result = await Transaction.create({ ...body, owner });
  return res.status(201).send(result);
};
