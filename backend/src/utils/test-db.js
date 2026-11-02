import { prisma } from "../config/prisma.js";

const testConnection = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully!");

    const users = await prisma.user.findMany({
      take: 1,
    });

    console.log("Database query successful:", users.length);
  } catch (error) {
    console.error("Database connection failed:", error);
  } finally {
    await prisma.$disconnect();
  }
};

testConnection();
