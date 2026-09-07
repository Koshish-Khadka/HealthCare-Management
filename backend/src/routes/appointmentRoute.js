import express from "express";
import {
  appointmentHistory,
  bookAppointment,
  cancelAppointment,
  updateAppointment,
  viewallAppointments,
  viewAppointmentById,
  viewDoctorAppointments,
} from "../controllers/appointmentController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.get("/viewDoctorAppointment", isAuthenticated, viewDoctorAppointments);
router.post("/bookAppointment", isAuthenticated, bookAppointment);
router.get("/getAllAppointment", isAuthenticated, viewallAppointments);
router.get("/viewAppoiontment/:id", isAuthenticated, viewAppointmentById);
router.patch("/updateAppointment/:id", updateAppointment);
router.get("/getAppointmentHistory", appointmentHistory);
router.post("/cancelAppointment", cancelAppointment);

export default router;
