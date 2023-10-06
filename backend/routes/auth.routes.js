import { Router } from "express";
import { tryCatchWrapper } from "../middlewares/tryCatchWrapper.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";
import { validateUser, validateLogin } from "../validators/users.validators.js";
import { singup, signin, signout } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/sign-up", validateUser, tryCatchWrapper(singup));

authRouter.post("/sign-in", validateLogin, tryCatchWrapper(signin));

authRouter.post("/sign-out", authenticateUser, tryCatchWrapper(signout));
