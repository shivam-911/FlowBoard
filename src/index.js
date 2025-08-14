import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
import { clearScreenDown } from "readline";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    console.log(`App listening on port http://localhost:${port}`);
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
