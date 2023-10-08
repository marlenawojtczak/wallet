import { Router } from "express";
import { tryCatchWrapper } from "../middlewares/tryCatchWrapper.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";
import { addTransactionValidation } from "../validators/transactions.validators.js";
import {
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getCategoriesTotals,
  getFilteredCategoriesTotals,
} from "../controllers/transactions.controller.js";

export const transactionsRouter = Router();

transactionsRouter.get(
  "/",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(getTransactions)
);

transactionsRouter.post(
  "/",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(addTransactionValidation),
  tryCatchWrapper(addTransaction)
);

transactionsRouter.patch(
  "/:transactionId",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(addTransactionValidation),
  tryCatchWrapper(updateTransaction)
);

transactionsRouter.delete(
  "/:transactionId",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(deleteTransaction)
);

transactionsRouter.get(
  "/categories",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(getCategoriesTotals)
);

transactionsRouter.get(
  "/categories/:year/:month",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(getFilteredCategoriesTotals)
);
