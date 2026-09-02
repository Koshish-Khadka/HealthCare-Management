import express from "express";
import { onBoardPatient } from "../controllers/patientController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/onboard", isAuthenticated, onBoardPatient);
export default router;
