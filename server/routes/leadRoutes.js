import { Router } from "express";
const leadRouter = Router();

import {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";

import { protect, protectAdmin } from "../middleware/authMiddleware.js";


// 🔒 ALL ROUTES PROTECTED
leadRouter.post("/", protect, protectAdmin, createLead);

leadRouter.get("/", protect, protectAdmin, getLeads);

leadRouter.get("/:id", protect, protectAdmin, getLeadById);

leadRouter.put("/:id", protect, protectAdmin, updateLead);

leadRouter.delete("/:id", protect, protectAdmin, deleteLead);

export default leadRouter;