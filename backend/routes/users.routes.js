import { Router } from "express";
import { tryCatchWrapper } from "../middlewares/tryCatchWrapper.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";
import { currentUser } from "../controllers/users.controller.js";

export const usersRouter = Router();

usersRouter.get(
  "/current",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(currentUser)
);
