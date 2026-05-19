import { Router } from "express";

const eventRouter = Router();

import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

import {
  protect,
  protectAdmin,
} from "../middleware/authMiddleware.js";

// CREATE
eventRouter.post(
  "/",
  protect,
  protectAdmin,
  createEvent
);

// GET ALL
eventRouter.get(
  "/",
  protect,
  protectAdmin,
  getEvents
);

// GET SINGLE
eventRouter.get(
  "/:id",
  protect,
  protectAdmin,
  getEventById
);

// UPDATE
eventRouter.put(
  "/:id",
  protect,
  protectAdmin,
  updateEvent
);

// DELETE
eventRouter.delete(
  "/:id",
  protect,
  protectAdmin,
  deleteEvent
);

export default eventRouter;