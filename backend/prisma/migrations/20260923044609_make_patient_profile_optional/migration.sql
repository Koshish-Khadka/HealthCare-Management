/*
  Warnings:

  - You are about to drop the column `email` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Patient` table. All the data in the column will be lost.
  - The `availability_status` column on the `doctor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `job_type` column on the `doctor` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AvailabilityStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT');

-- DropIndex
DROP INDEX "Patient_email_key";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "email",
DROP COLUMN "gender",
ALTER COLUMN "first_name" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL,
ALTER COLUMN "date_of_birth" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "marital_status" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "emergency_contact_name" DROP NOT NULL,
ALTER COLUMN "emergency_contact_number" DROP NOT NULL,
ALTER COLUMN "relation" DROP NOT NULL,
ALTER COLUMN "privacy_consent" SET DEFAULT false,
ALTER COLUMN "service_consent" SET DEFAULT false,
ALTER COLUMN "medical_consent" SET DEFAULT false;

-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "availability_status",
ADD COLUMN     "availability_status" "AvailabilityStatus" NOT NULL DEFAULT 'AVAILABLE',
DROP COLUMN "job_type",
ADD COLUMN     "job_type" "JobType" NOT NULL DEFAULT 'FULL_TIME';
