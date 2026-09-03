import { prisma } from "../../config/prisma.js";

export const bookAppointment = async (req, res) => {
  try {
    const { doctor_id, appointmentDate, time } = req.body;
    if (!doctor_id || !appointmentDate || !time) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const patient = await prisma.patient.findUnique({
      where: {
        userId,
      },
    });

    if (!patient) {
      return res.status(400).json({
        message: "Please complete your patient profile first",
      });
    }
    // check doctor availabilty for that date

    // book apoointment to the doctor
    const appointment = await prisma.appointment.create({
      data: {
        patient_id: req.session.userId,
        doctor_id,
        appointmentDate,
        time,
      },
    });
    res
      .status(200)
      .json({ message: "Appointment created sucessfully", appointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed tp book appointment " });
  }
};

// fetch all appointment data of that patient to doctor
export const viewallAppointments = async (req, res) => {
  try {
    const userId = req.session.userId;
    if (!userId) {
      return res.status(404).json({ message: "User id not found" });
    }
    const appointment = await prisma.appointment.findMany({
      where: {
        patient_id: userId,
      },
    });
    if (!appointment) {
      return res.status(404).json({ message: "No apoointment found till now" });
    }
    res
      .status(200)
      .json({ message: "Sucessfully fetched all data of doctor", appointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch Apoointment " });
  }
};

// fetch all apoointment which status is completed that is history

export const appointmentHistory = async (req, res) => {
  try {
    const appointment = await prisma.appointment.findMany({
      where: {
        patient_id: req.session.userId,
        status: "COMPLETED",
      },
    });
    if (!appointment) {
      return res.status(404).json({ message: "No history found " });
    }
    res.status(200).json({
      message: "Sucessfully fetched history apoointment",
      appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch appointment history " });
  }
};

// view appointment detail by id
export const appointmentDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ message: "Id not found" });

    // find the appointment
    const appointment = await prisma.appointment.findFirst({
      where: {
        id,
      },
    });
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res
      .status(200)
      .json({ message: "Sucessfully fetched appointment detail", appointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Faield to get appointment detail by id" });
  }
};

// cancel the appointment
