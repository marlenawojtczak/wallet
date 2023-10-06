import { Router } from "express";
import { tryCatchWrapper } from "../middlewares/tryCatchWrapper.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";
import { addTransactionValidation } from "../validators/transactions.validators.js";
import { addTransaction } from "../controllers/transactions.controller.js";

export const transactionsRouter = Router();

transactionsRouter.post(
  "/",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(addTransactionValidation),
  tryCatchWrapper(addTransaction)
);
