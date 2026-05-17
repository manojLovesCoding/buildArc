// routes/authRoutes.js

import { Router } from "express";
const authrouter = Router();

import { register, login, getProfile } from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

authrouter.post("/register", register);
authrouter.post("/login", login);
authrouter.get("/profile", protect, getProfile);

export default authrouter;
