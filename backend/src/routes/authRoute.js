import express from "express";
import {
  getUserSession,
  login,
  register,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/session", getUserSession);


export default router;
