import { prisma } from "../config/prisma.js";
import bcrypt from "bcryptjs";

// admin creates doctor
export const createDoctor = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      specialization,
      license_number,
      phone,
      address,
      department,
      // availability,
      job_type,
    } = req.body;

    console.log("create doctor", req.body);

    if (
      !email ||
      !password ||
      !username ||
      !specialization ||
      !license_number ||
      !phone ||
      !address ||
      !department ||
      !job_type
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingDoctor = await prisma.doctor.findUnique({
      where: { email },
    });
    if (existingDoctor) {
      return res
        .status(400)
        .json({ message: "Doctor with this email already exists" });
    }

    const result = await prisma.$transaction(async (tx) => {
      // 1. Create user on user table
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const user = await tx.user.create({
        data: {
          username,
          role: "DOCTOR",
          email: email,
          password: hash,
        },
      });

      // 2. Create profile linked to user on doctor table using 'tx' instead of 'prisma'
      const doctor = await tx.doctor.create({
        data: {
          userId: user.id,
          name: username,
          email,
          specialization,
          license_number,
          phone,
          address,
          department,
          // availability_status: availability,
          job_type,
        },
      });

      return { user, doctor };
    });

    res.status(201).json({ message: "Doctor created successfully", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create doctor" });
  }
};

export const addWorkingDays = async (req, res) => {
  try {
    console.log("Working days controller");
    const { doctor_id, schedule } = req.body;

    // Optional: Delete existing days if this is an update rather than just onboarding
    await prisma.workingDays.deleteMany({
      where: { doctor_id: doctor_id },
    });
    const workingDaysData = schedule.map((slot) => ({
      doctor_id: doctor_id,
      day: slot.day,
      start_time: slot.start_time,
      close_time: slot.close_time,
    }));
    await prisma.workingDays.createMany({
      data: workingDaysData,
    });

    res.status(201).json({ message: "Schedule saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add working days", error });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany();
    res.status(200).json({ message: "Doctors fetched successfully", doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get doctors" });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await prisma.doctor.findUnique({
      where: { id },
    });
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor fetched successfully", doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get doctor" });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      specialization,
      license_number,
      phone,
      address,
      department,
      // availability,
      job_type,
    } = req.body;

    const updateDoctor = await prisma.doctor.update({
      where: { id },
      data: {
        name,
        specialization,
        license_number,
        phone,
        address,
        department,
        // availability,
        job_type,
      },
    });

    res
      .status(200)
      .json({ message: "Doctor updated successfully", updateDoctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update doctor" });
  }
};

export const getAvailableDoctors = async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany({
      where: {
        availability_status: "AVAILABLE",
      },
    });
    res
      .status(200)
      .json({ message: "Sucessfully fetched available doctors", doctors });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch available doctors", error });
  }
};

// export const addDoctorWorkingHours = async (req, res) => {
//   try {
//     const userId = req.session.userId;
//     const { workingHours } = req.body;
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Failed to add working hours" });
//   }
// };
