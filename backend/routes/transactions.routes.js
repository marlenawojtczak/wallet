import { Router } from "express";
import { tryCatchWrapper } from "../middlewares/tryCatchWrapper.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";
import { addTransactionValidation } from "../validators/transactions.validators.js";
import {
  addTransaction,
  getTransactions,
  updateTransaction,
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
