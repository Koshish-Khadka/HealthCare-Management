import express from "express";
import {
  appointmentHistory,
  bookAppointment,
  updateAppointment,
  viewallAppointments,
  viewAppointmentById,
  viewDoctorAppointments,
} from "../controllers/appointmentController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.get("/viewDoctorAppointment", viewDoctorAppointments);
router.get("/viewAppoiontment/:id", viewAppointmentById);
router.patch("/updateAppointment/:id", updateAppointment);
router.post("/bookAppointment", isAuthenticated, bookAppointment);
router.get("/getAllAppointment", isAuthenticated, viewallAppointments);
router.get("/getAppointmentHistory", appointmentHistory);

export default router;
