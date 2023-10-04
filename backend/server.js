import app from "./app.js";
import { connectToMongoDB, disconnected } from "./database/database.js";
import { PORT } from "./config/config.js";

const startServer = async () => {
  try {
    await connectToMongoDB();
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  }
};

const stopServer = async () => {
  await disconnected();
  process.exit(0);
};

startServer();

process.on("SIGINT", stopServer);
process.on("SIGTERM", stopServer);
