import express from "express";

import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
} from "../controllers/doctorController.js";
const router = express.Router();

router.post("/createDoctor", isAuthenticated, createDoctor);
router.get("/allDoctors", getAllDoctors);
router.get("/:id", getDoctorById);
router.patch("/updateDoctor/:id", updateDoctor);

export default router;
