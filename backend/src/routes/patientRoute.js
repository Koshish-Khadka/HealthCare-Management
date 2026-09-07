import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  getPatientProfile,
  onBoardPatient,
  updateProfile,
} from "../controllers/patientController.js";

const router = express.Router();

router.post("/onboard", isAuthenticated, onBoardPatient);
router.get("/profile", isAuthenticated, getPatientProfile);
router.patch("/profile/update", isAuthenticated, updateProfile);

export default router;
