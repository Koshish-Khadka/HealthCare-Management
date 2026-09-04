import { prisma } from "../config/prisma.js";

export const createDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      specialization,
      license_number,
      phone,
      address,
      department,
      availability,
      job_type,
    } = req.body;

    if (
      !email ||
      !password ||
      !name ||
      !specialization ||
      !license_number ||
      !phone ||
      !address ||
      !department ||
      !availability ||
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
      const user = await tx.user.create({
        data: {
          username: name,
          email: email,
          password: password, // Note: Consider hashing this for production!
        },
      });

      // 2. Create profile linked to user on doctor table using 'tx' instead of 'prisma'
      const doctor = await tx.doctor.create({
        data: {
          userId: user.id,
          name,
          email,
          specialization,
          license_number,
          phone,
          address,
          department,
          availability_status: availability,
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
    const workingDays = await prisma.workingDay.createMany({
      data: [
        {
          doctorId: "doctor-123",
          day: "Monday",
          startTime: "09:00",
          endTime: "17:00",
        },
        {
          doctorId: "doctor-123",
          day: "Tuesday",
          startTime: "09:00",
          endTime: "17:00",
        },
        {
          doctorId: "doctor-123",
          day: "Wednesday",
          startTime: "09:00",
          endTime: "13:00",
        },
        {
          doctorId: "doctor-123",
          day: "Thursday",
          startTime: "09:00",
          endTime: "17:00",
        },
        {
          doctorId: "doctor-123",
          day: "Friday",
          startTime: "09:00",
          endTime: "15:00",
        },
      ],
    });
    res.status(200).json({ workingDays });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add working days" });
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
      availability,
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
        availability,
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

export const addDoctorWorkingHours = async (req, res) => {
  try {
    const userId = req.session.userId;
    const { workingHours } = req.body;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add working hours" });
  }
};
