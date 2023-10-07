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
    return res.status(404).send({ message: "Transaction not found" });
  }
  return res.status(200).send(result);
};

export const deleteTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  const { _id: owner } = req.user;
  const result = await Transaction.findOneAndDelete({
    _id: transactionId,
    owner,
  });
  if (!result) {
    return res.status(404).send({ message: "Transaction not found" });
  }
  return res.status(204).end();
};
