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
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create doctor" });
  }
};
