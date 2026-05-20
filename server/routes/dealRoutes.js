// routes/dealRoutes.js

import { Router } from "express";

const dealRouter = Router();

import {
  createDeal,
  getDeals,
  getDealById,
  updateDeal,
  deleteDeal,
} from "../controllers/dealController.js";

import {
  protect,
  protectAdmin,
} from "../middleware/authMiddleware.js";

// CREATE
dealRouter.post(
  "/",
  protect,
  protectAdmin,
  createDeal
);

// GET ALL
dealRouter.get(
  "/",
  protect,
  protectAdmin,
  getDeals
);

// GET SINGLE
dealRouter.get(
  "/:id",
  protect,
  protectAdmin,
  getDealById
);

// UPDATE
dealRouter.put(
  "/:id",
  protect,
  protectAdmin,
  updateDeal
);

// DELETE
dealRouter.delete(
  "/:id",
  protect,
  protectAdmin,
  deleteDeal
);

export default dealRouter;