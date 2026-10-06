import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { allUsers, getUserById } from "../controllers/adminController.js";

const router = express.Router();
router.get("/users", allUsers);
router.get("/users/:userId", getUserById);

export default router;
