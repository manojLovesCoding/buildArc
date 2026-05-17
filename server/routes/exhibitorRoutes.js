import { Router } from "express";

const exhibitorRouter = Router();

import {
  createExhibitor,
  getExhibitors,
  getExhibitorById,
  updateExhibitor,
  deleteExhibitor,
} from "../controllers/exhibitorController.js";

import {
  protect,
  protectAdmin,
} from "../middleware/authMiddleware.js";

// CREATE
exhibitorRouter.post(
  "/",
  protect,
  protectAdmin,
  createExhibitor
);

// GET ALL
exhibitorRouter.get(
  "/",
  protect,
  protectAdmin,
  getExhibitors
);

// GET SINGLE
exhibitorRouter.get(
  "/:id",
  protect,
  protectAdmin,
  getExhibitorById
);

// UPDATE
exhibitorRouter.put(
  "/:id",
  protect,
  protectAdmin,
  updateExhibitor
);

// DELETE
exhibitorRouter.delete(
  "/:id",
  protect,
  protectAdmin,
  deleteExhibitor
);

export default exhibitorRouter;