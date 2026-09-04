import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // verify token
    const token = authHeader.split(" ")[1];
    const session = jwt.verify(token, process.env.JWT_SECRET);
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // check user data
    const user = await prisma.user.findUnique({
      where: {
        // id: session.userId,
        id: session.userId,
      },
    });

    if (!user) return res.status(404).json({ message: "User not found" });
    req.session = session;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to authenticate user" });
  }
};

export const protectAdmin = (req, res, next) => {
  if (req.session.role !== "ADMIN") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

export const protectDoctor = (req, res, next) => {
  if (req.session.role !== "DOCTOR") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
