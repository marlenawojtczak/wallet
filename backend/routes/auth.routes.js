import { Router } from "express";
import { tryCatchWrapper } from "../middlewares/tryCatchWrapper.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";
import {
  validateUser,
  validateLogin,
  validateVerifyUser,
} from "../validators/users.validators.js";
import {
  singup,
  signin,
  signout,
  refreshTokens,
  verify,
  resendVerify,
} from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/sign-up", validateUser, tryCatchWrapper(singup));

authRouter.post("/sign-in", validateLogin, tryCatchWrapper(signin));

authRouter.get("/verify/:verificationToken", verify);

authRouter.post("/verify", validateVerifyUser, resendVerify);

authRouter.post(
  "/sign-out",
  tryCatchWrapper(authenticateUser),
  tryCatchWrapper(signout)
);

authRouter.post("/refresh", tryCatchWrapper(refreshTokens));
