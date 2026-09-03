import { prisma } from "../../config/prisma.js";

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
    res
      .status(200)
      .json({
        message: "Sucessfully updated appointment status",
        updateAppointment,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update appointment status" });
  }
};


