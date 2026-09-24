import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { allUsers } from "../controllers/adminController.js";

const router = express.Router();
router.get("/users", allUsers);
export default router;
