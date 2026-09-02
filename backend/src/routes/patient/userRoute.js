import express from "express";
import {
  getPatientProfile,
  onBoardPatient,
} from "../../controllers/patient/userController.js";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/onboard", isAuthenticated, onBoardPatient);
router.get("/profile", isAuthenticated, getPatientProfile);

export default router;
