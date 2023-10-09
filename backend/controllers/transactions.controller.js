import Transaction from "../models/transactions.model.js";
import User from "../models/users.model.js";
import { transactionsCategory } from "../utils/constants.js";

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

export const getCategoriesTotals = async (req, res, next) => {
  const { _id: owner, _id } = req.user;

  const totalIncomeResult = await Transaction.aggregate([
    {
      $match: {
        owner: { $eq: owner },
        category: "Income",
      },
    },
    {
      $group: {
        _id: null,
        totalIncome: { $sum: "$amount" },
      },
    },
    {
      $project: {
        _id: 0,
        totalIncome: 1,
      },
    },
  ]);

  const totalIncome = totalIncomeResult[0]?.totalIncome || 0;

  const totalExpenseResult = await Transaction.aggregate([
    {
      $match: {
        owner: { $eq: owner },
        category: { $ne: "Income" },
      },
    },
    {
      $group: {
        _id: null,
        totalExpense: { $sum: "$amount" },
      },
    },
    {
      $project: {
        _id: 0,
        totalExpense: 1,
      },
    },
  ]);

  const totalExpense = totalExpenseResult[0]?.totalExpense || 0;

  const totalBalance = totalIncome - totalExpense;

  await User.findByIdAndUpdate(_id, { balance: totalBalance });

  const result = await Transaction.aggregate([
    {
      $match: {
        owner: { $eq: owner },
      },
    },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        total: 1,
      },
    },
  ]);

  const totals = transactionsCategory.map((category) => {
    const total = result.find((result) => result.category === category)?.total;
    return {
      category,
      total: total || 0,
    };
  });

  const response = {
    totalIncome: Math.abs(totalIncome),
    totalExpense: Math.abs(totalExpense),
    totalBalance,
    totals,
  };

  return res.status(200).send(response);
};

export const getFilteredCategoriesTotals = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { month, year } = req.params;

  if (!month || !year) {
    return res.status(400).json({ error: "Please provide month and year" });
  }

  const totalIncomeResult = await Transaction.aggregate([
    {
      $match: {
        owner: { $eq: owner },
        category: "Income",
        date: {
          $gte: new Date(`${year}-${month}-01`),
          $lt: new Date(`${year}-${month}-31`),
        },
      },
    },
    {
      $group: {
        _id: null,
        totalIncome: { $sum: "$amount" },
      },
    },
    {
      $project: {
        _id: 0,
        totalIncome: 1,
      },
    },
  ]);

  const totalIncome = totalIncomeResult.length
    ? totalIncomeResult[0].totalIncome
    : 0;

  const totalExpenseResult = await Transaction.aggregate([
    {
      $match: {
        owner: { $eq: owner },
        category: { $ne: "Income" },
        date: {
          $gte: new Date(`${year}-${month}-01`),
          $lt: new Date(`${year}-${month}-31`),
        },
      },
    },
    {
      $group: {
        _id: null,
        totalExpense: { $sum: "$amount" },
      },
    },
    {
      $project: {
        _id: 0,
        totalExpense: 1,
      },
    },
  ]);

  const totalExpense = totalExpenseResult.length
    ? totalExpenseResult[0].totalExpense
    : 0;

  const totalBalance = totalIncome - totalExpense;

  const result = await Transaction.aggregate([
    {
      $match: {
        owner: { $eq: owner },
        date: {
          $gte: new Date(`${year}-${month}-01`),
          $lt: new Date(`${year}-${month}-31`),
        },
      },
    },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        total: 1,
      },
    },
  ]);

  const totals = transactionsCategory.map((category) => {
    const total = result.find((result) => result.category === category)?.total;
    return {
      category,
      total: total || 0,
    };
  });

  const response = {
    totalIncome: Math.abs(totalIncome),
    totalExpense: Math.abs(totalExpense),
    totalBalance,
    totals,
  };

  return res.status(200).send(response);
};
