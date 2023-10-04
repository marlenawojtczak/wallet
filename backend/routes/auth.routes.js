import { Router } from "express";
import { validateUser } from "../validators/users.validators.js";
import { singup } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/sign-up", validateUser, singup);
