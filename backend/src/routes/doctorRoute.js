import express from "express";

import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {

  createDoctor,
  getAllDoctors,
  getAvailableDoctors,
  getDoctorById,
  getDoctorWorkingDays,
  onboardDoctor,
  updateDoctor,
} from "../controllers/doctorController.js";
const router = express.Router();

router.post("/createDoctor", isAuthenticated, createDoctor);
router.get("/allDoctors", getAllDoctors);
router.get("/allDoctors/available", getAvailableDoctors);
router.get("/:id", getDoctorById);
router.patch("/updateDoctor/:id", updateDoctor);
// router.post("/working-days", addWorkingDays);
router.get("/working-days/:doctorId", isAuthenticated, getDoctorWorkingDays);
// router.post("/professional-details", isAuthenticated, addProfessionalDetails);
router.post("/onboard-doctor", isAuthenticated, onboardDoctor);
export default router;
