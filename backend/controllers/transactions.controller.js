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

export const updateTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  const { body } = req.body;
  const { _id: owner } = req.user;
  const result = await Transaction.findOneAndUpdate(
    { _id: transactionId, owner },
    body,
    {
      new: true,
    }
  );
  if (!result) {
    return res.status(404).json({ message: "Not found transaction" });
  }
  return res.status(200).json(result);
};
