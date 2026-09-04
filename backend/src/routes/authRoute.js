import express from "express";
import {
  register,
  login,
  getUserSession,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/session", getUserSession);

export default router;
