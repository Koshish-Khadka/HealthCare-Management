import { prisma } from "../config/prisma.js";

export const removeDoctor = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to change doctor status" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        status: true,
        createdAt: true,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get user data" });
  }
};

export const allUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        status: true,
        createdAt: true,
      },
    });

    res.status(200).json({ message: "Users fetched sucessfully", users });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch all users", error });
  }
};
