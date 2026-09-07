export const removeDoctor = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to change doctor status" });
  }
};
