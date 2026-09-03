import { prisma } from "../../config/prisma.js";

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
    // create doctor
    const doctor = await prisma.doctor.create({
      data: {
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
      },
    });
    res.status(201).json({ message: "Doctor created successfully", doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create doctor" });
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
