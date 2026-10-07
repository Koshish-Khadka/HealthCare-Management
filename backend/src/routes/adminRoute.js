import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  allUsers,
  createAppointment,
  getUserById,
} from "../controllers/adminController.js";

const router = express.Router();
router.get("/users", isAuthenticated, allUsers);
router.get("/users/:userId", isAuthenticated, getUserById);
router.post("/appointments", isAuthenticated, createAppointment);

export default router;
