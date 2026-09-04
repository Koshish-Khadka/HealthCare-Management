import express from "express";

import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { createDoctor } from "../controllers/doctorController.js";
const router = express.Router();

router.post("/createDoctor", isAuthenticated, createDoctor);
export default router;
