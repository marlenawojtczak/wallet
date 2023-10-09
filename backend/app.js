import express from "express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
import { errorHandler } from "./middlewares/errorHandler.js";
import { authRouter } from "./routes/auth.routes.js";
import { usersRouter } from "./routes/users.routes.js";
import { transactionsRouter } from "./routes/transactions.routes.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const require = createRequire(import.meta.url);
const fs = require("fs");
const swaggerDocument = JSON.parse(
  fs.readFileSync("./docs/swagger.json", "utf8")
);

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(helmet());
app.use(errorHandler);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/transactions", transactionsRouter);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Welocome to Wallet API",
  });
});

app.get("*", (req, res) => {
  return res.status(404).send({
    message: "Not found",
  });
});

export default app;
