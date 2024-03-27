import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import kanbansRouter from "./routes/api/kanbans";

const app = express();
dotenv.config();

const { DB_HOST } = process.env;
if (!DB_HOST) {
  console.error("DB_HOST is not defined in the environment variables.");
  process.exit(1);
}
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/kanbans", kanbansRouter);

export default app;
