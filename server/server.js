import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import connectDB from "./config/db.js";
import authrouter from "./routes/authRoutes.js";
import leadRouter from "./routes/leadRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());
app.use(multer().none());

//routes
app.get("/", (req, res) => res.send("server is running"));
await connectDB();
app.use("/api/auth", authrouter);
app.use("/api/leads", leadRouter);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
