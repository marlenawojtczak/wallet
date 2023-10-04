import express from "express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import { authRouter } from "./routes/auth.routes.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(helmet());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Welocome to Wallet API",
  });
});

app.get("*", (req, res) => {
  return res.status(404).json({
    status: false,
    message: "Not found",
  });
});

export default app;
