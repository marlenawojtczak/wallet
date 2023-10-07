import Transaction from "../models/transactions.model.js";

export const addTransaction = async (req, res, next) => {
  const { body } = req;
  const { _id: owner } = req.user;
  const result = await Transaction.create({ ...body, owner });
  return res.status(201).send(result);
};

export const getTransactions = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Transaction.find({ owner });
  return res.status(200).send(result);
};
