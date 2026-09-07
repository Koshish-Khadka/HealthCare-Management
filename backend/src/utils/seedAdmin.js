import bcrypt from "bcryptjs";
import { prisma } from "../config/prisma.js";

const Seedadmin = async () => {
  try {
    const isAdminExists = await prisma.user.findFirst({
      where: {
        role: "ADMIN",
      },
    });
    if (!isAdminExists) {
      await prisma.user.create({
        data: {
          email: "admin321@gmail.com",
          password: bcrypt.hashSync("koshish****$", 10),
          username: "Admin",
          role: "ADMIN",
        },
      });
    }
  } catch (error) {
    console.log("Failed to seed admin", error);
  }
};
Seedadmin();
