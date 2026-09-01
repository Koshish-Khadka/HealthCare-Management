export const register = (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to register user" });
  }
};
export const login = (req, res) => {}


