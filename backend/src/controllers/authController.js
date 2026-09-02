import { prisma } from "../config/prisma.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: confirmPassword,
      },
    });
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to register user" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Failed to login user" });
  }
};
