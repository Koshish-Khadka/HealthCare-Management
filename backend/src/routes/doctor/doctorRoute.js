import express from "express";
import { createDoctor } from "../../controllers/doctor/doctorController.js";

const router = express.Router();

router.post("/createDoctor", createDoctor);
export default router;
