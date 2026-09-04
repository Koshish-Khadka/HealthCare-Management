import { prisma } from "../config/prisma.js";
export const onBoardPatient = async (req, res) => {
  try {
    const userId = req.session.userId;
    const {
      first_name,
      last_name,
      date_of_birth,
      gender,
      phone,
      email,
      marital_status,
      address,
      emergency_contact_name,
      emergency_contact_number,
      relation,
      blood_group,
      allergies,
      medical_conditions,
      insurance_provider,
      insurance_number,
      privacy_consent,
      service_consent,
      medical_consent,
    } = req.body;
    if (
      !first_name ||
      !last_name ||
      !date_of_birth ||
      !gender ||
      !phone ||
      !email ||
      !marital_status ||
      !address ||
      !emergency_contact_name ||
      !emergency_contact_number ||
      !relation ||
      !blood_group ||
      !allergies ||
      !medical_conditions ||
      !insurance_provider ||
      !insurance_number ||
      !privacy_consent ||
      !service_consent ||
      !medical_consent
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check if the patient data already exists
    const checkPatient = await prisma.patient.findUnique({
      where: {
        userId: userId,
      },
    });
    if (checkPatient) {
      return res.status(400).json({ message: "Patient data already exists" });
    }

    const newPatient = await prisma.patient.create({
      data: {
        userId: userId,
        first_name,
        last_name,
        date_of_birth,
        gender,
        phone,
        email,
        marital_status,
        address,
        emergency_contact_name,
        emergency_contact_number,
        relation,
        blood_group,
        allergies,
        medical_conditions,
        insurance_provider,
        insurance_number,
        privacy_consent,
        service_consent,
        medical_consent,
      },
    });
    res
      .status(201)
      .json({ message: "Patient onboarded successfully", patient: newPatient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to onboard patient" });
  }
};

export const getPatientProfile = async (req, res) => {
  try {
    const userId = req.session.userId;
    const patientData = await prisma.patient.findUnique({
      where: {
        userId: userId,
      },
    });
    if (!patientData) {
      return res.status(404).json({ message: "Patient data not found" });
    }
    res.status(200).json({
      message: "Patient data retrieved successfully",
      patient: patientData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get patient data" });
  }
};
