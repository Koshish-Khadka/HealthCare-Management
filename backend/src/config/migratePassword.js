import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";


const prisma = new PrismaClient();

const migratePasswords = async () => {
  try {
    const users = await prisma.user.findMany();

    for (const user of users) {
      // Hash the existing plain-text password
      const hashedPassword = await bcrypt.hash(user.password, 10);

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: hashedPassword,
        },
      });

      console.log(`Password migrated for: ${user.email}`);
    }

    console.log("Password migration completed.");
  } catch (error) {
    console.error("Password migration failed:", error);
  } finally {
    await prisma.$disconnect();
  }
};

migratePasswords();
