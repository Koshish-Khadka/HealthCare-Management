import { prisma } from "../config/prisma.js";

// view appointment by doctor
export const viewDoctorAppointments = async (req, res) => {
  try {
    const doctorId = req.session.userId;
    if (!doctorId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const appointments = await prisma.appointment.findMany({
      where: { doctorId },
      include: {
        patient: true,
      },
    });
    if (!appointments) {
      return res.status(404).json({ message: "No appointments found" });
    }
    res.status(200).json({
      message: "Appointments fetched successfully",
      appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get appointments" });
  }
};

// view appointment detail
export const viewAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Appointment ID is required" });
    }
    const appointment = await prisma.appointment.findUnique({
      where: { id: parseInt(id) },
      include: {
        patient: true,
        doctor: true,
      },
    });
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found by id" });
    }
    res
      .status(200)
      .json({ message: "sucessfully fetched apoointment by Id", appointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: " Failed to get appointment by id" });
  }
};

// update appointment
export const updateAppointment = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!status || !id) {
      return res.status(400).json({ message: "statusId and id is required" });
    }

    const checkAppointment = await prisma.appointment.findUnique({
      where: {
        id: id,
      },
    });
    if (!checkAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    const updateAppointment = await prisma.appointment.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });
    res.status(200).json({
      message: "Sucessfully updated appointment status",
      updateAppointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update appointment status" });
  }
};

// book appointment by patient
// export const bookAppointment = async (req, res) => {
//   try {
//     const userId = req.session.userId;
//     console.log("user id", userId);
//     console.log("body", req.body);
//     if (!userId) return res.status(404).json({ message: "User id not found" });

//     const { doctor_id, appointmentDate, time } = req.body;
//     if (!doctor_id || !appointmentDate || !time) {
//       return res.status(404).json({ message: "All fields are required" });
//     }

//     const patientExists = await prisma.patient.findUnique({
//       where: { userId: userId },
//     });

//     if (!patientExists) {
//       return res.status(404).json({
//         message: `Booking failed. Patient with ID ${userId} does not exist.`,
//       });
//     }

//     // book apoointment to the doctor
//     const appointment = await prisma.appointment.create({
//       data: {
//         patient_id: userId,
//         doctor_id,
//         appointmentDate,
//         time,
//       },
//     });
//     res
//       .status(200)
//       .json({ message: "Appointment created sucessfully", appointment });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Failed tp book appointment " });
//   }
// };

export const bookAppointment = async (req, res) => {
  try {
    const userId = req.session.userId;
    if (!userId) return res.status(404).json({ message: "User id not found" });

    const { doctor_id, appointmentDate, time } = req.body;
    if (!doctor_id || !appointmentDate || !time) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const patientExists = await prisma.patient.findUnique({
      where: { userId: userId },
    });

    if (!patientExists) {
      return res.status(404).json({
        message: `Booking failed. Patient profile for User ID ${userId} does not exist.`,
      });
    }

    // book appointment to the doctor
    const appointment = await prisma.appointment.create({
      data: {
        patient_id: patientExists.id, // the actual id should ne userId from req.session.userId
        doctor_id,
        appointmentDate,
        time,
      },
    });

    res
      .status(200)
      .json({ message: "Appointment created successfully", appointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to book appointment " });
  }
};

// fetch all appointment data of that patient to doctor
export const viewallAppointments = async (req, res) => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    // Find the patient profile belonging to the logged-in user
    const patientExists = await prisma.patient.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!patientExists) {
      return res.status(404).json({
        message: "Patient profile not found",
      });
    }

    // Find appointments using Patient.id
    const appointments = await prisma.appointment.findMany({
      where: {
        patient_id: patientExists.id,
      },
      include: {
        doctor: true,
        patient: true,
      },
      orderBy: {
        appointmentDate: "desc",
      },
    });

    if (appointments.length === 0) {
      return res.status(404).json({
        message: "No appointments found",
      });
    }

    res.status(200).json({
      message: "Successfully fetched all appointments",
      appointments,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch appointments",
    });
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
