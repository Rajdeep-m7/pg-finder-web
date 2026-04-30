import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});


async function startServer() {
  try {
    await connectDB();

    const server = app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });

    server.on("error", (err) => {
      console.error("Server error:", err);
    });

  } catch (error) {
    console.error("❌ Failed to start server", error);
    process.exit(1);
  }
}

startServer();