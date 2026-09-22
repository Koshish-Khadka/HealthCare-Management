import express from "express";
import {
  register,
  login,
  getUserSession,
} from "../controllers/authController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/session", isAuthenticated, getUserSession);

export default router;
