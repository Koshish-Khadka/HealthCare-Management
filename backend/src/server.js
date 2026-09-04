import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import patientRoute from "./routes/patientRoute.js";
import doctorRoute from "./routes/doctorRoute.js";
import appointmentRoute from "./routes/appointmentRoute.js";
const app = express();

dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// routes
app.use("/api/auth", authRoute);
app.use("/api/patients", patientRoute);
app.use("/api/doctors", doctorRoute);
app.use("/api/appointment", appointmentRoute);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
