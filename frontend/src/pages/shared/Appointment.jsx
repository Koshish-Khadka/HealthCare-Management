import React, { useEffect, useState } from "react";
import api from "../../lib/axios";
import { Eye, Plus, Search, SquarePen, Trash } from "lucide-react";
import Table from "../../components/common/Table";
import { usePatient } from "../../context/patientContent";

const Appointment = () => {
  const [allAppointment, setAllAppointment] = useState(null || []);
  const [loading, setLoading] = useState(false);
  const [bookAppointment, setBookAppointment] = useState(false);
  // const [patients, setPatients] = useState(null || []);
  const [doctors, setDoctors] = useState(null || []);
  const [input, setInput] = useState({
    patientId: "",
    doctorId: "",
    appointmentDate: "",
    time: "",
  });
  const { patientData } = usePatient();

  // console.log("Patient data from context", patientData);

  const appointmentColumns = [
    {
      key: "Patient",
      header: "Patient",
    },
    {
      key: "Doctor",
      header: "Doctor",
    },
    {
      key: "Specialization",
      header: "Specialization",
    },
    {
      key: "appointmentDate",
      header: "Appointment Date",
      width: "1.2fr",
      render: (value) => <span>{new Date(value).toLocaleDateString()}</span>,
    },
    {
      key: "Time",
      header: "Time",
    },
    {
      key: "phone",
      header: "Contact",
    },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <span
          className={
            value === "COMPLETED"
              ? "text-green-600"
              : value === "CANCELLED"
                ? "text-red-600"
                : value === "PENDING"
                  ? "text-yellow-600"
                  : "text-blue-600"
          }
        >
          {value}
        </span>
      ),
    },
    {
      key: "action",
      header: "Action",
      render: () => (
        <span className="flex flex-col items-center md:flex-row gap-3 cursor-pointer">
          <Eye color="#16a34a" size={24} className="hover:scale-110" />
          <SquarePen color="#4b5563" size={20} className="hover:scale-110" />
          <Trash color="#dc2626" size={20} className="hover:scale-110" />
        </span>
      ),
    },
  ];
  const fetchAllAppointment = async () => {
    try {
      setLoading(true);
      const response = await api.get("/appointment/getAllAppointment");
      setAllAppointment(response.data.appointments);
    } catch (error) {
      console.log("Failed to fetch all appointment", error);
    } finally {
      setLoading(false);
    }
  };
  // const fetchAllPatient = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await api.get("/patients/allPatients");
  //     setPatients(response.data.patients);
  //   } catch (error) {
  //     console.log("Failed to fetch all patients", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchAllDoctor = async () => {
    try {
      const response = await api.get("/doctors/allDoctors");
      setDoctors(response.data.doctors);
    } catch (error) {
      console.log("Failed to fetch doctor ", error);
    }
  };

  useEffect(() => {
    // fetchAllPatient();
    fetchAllAppointment();
    fetchAllDoctor();
  }, []);

  const formattedAppointments = allAppointment.map((appointment) => ({
    id: appointment.id,
    Patient: `${appointment.patient.first_name} ${appointment.patient.last_name}`,
    Doctor: appointment.doctor.name,
    Specialization: appointment.doctor.specialization,
    appointmentDate: appointment.appointmentDate,
    Time: appointment.time,
    phone: appointment.patient.phone,
    status: appointment.status,
  }));
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const createAppointment = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/admin/appointments", {
        patient_id: input.patientId,
        doctor_id: input.doctorId,
        appointmentDate: input.appointmentDate,
        time: input.time,
      });
      console.log("Appointment created successfully", response.data);
      alert("Appointment created successfully");
      setBookAppointment(false);
      fetchAllAppointment();
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("All Apppointment", allAppointment);
  return (
    <div>
      <div className="flex justify-between items-center p-3 rounded-md bg-white">
        <p className="text-2xl font-bold">
          {allAppointment.length || 0}{" "}
          <span className="text-lg font-light">Appointments</span>
        </p>
        <div className="flex items-center gap-4">
          <div className="hidden relative w-full max-w-68 lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Users..."
            />
          </div>
          <button
            className="flex cursor-pointer items-center gap-2 rounded-md border border-stone-300 bg-[#004B8D] px-4 py-1 text-white transition-colors duration-200 hover:bg-[#0764b5]"
            onClick={() => setBookAppointment(true)}
          >
            <Plus size={18} />
            Book Appointment
          </button>
        </div>
      </div>
      <Table
        data={formattedAppointments}
        columns={appointmentColumns}
        loading={loading}
      />

      {bookAppointment && (
        <div
          onClick={() => setBookAppointment(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Book Appointment
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Schedule an appointment with a doctor.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setBookAppointment(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="p-6" onSubmit={createAppointment}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Patient */}
                <div className="col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Patient
                  </label>

                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    defaultValue=""
                    name="patientId"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select patient
                    </option>
                    {patientData.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.first_name} {patient.last_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor */}
                <div className="col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Doctor
                  </label>

                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    defaultValue=""
                    name="doctorId"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select doctor
                    </option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} - {doctor.specialization}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    name="appointmentDate"
                    onChange={handleInputChange}
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Appointment Time
                  </label>

                  <input
                    type="time"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    name="time"
                    onChange={handleInputChange}
                  />
                </div>

                {/* Appointment Type */}
                {/* <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Appointment Type
                  </label>

                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="CONSULTATION">Consultation</option>
                    <option value="FOLLOW_UP">Follow-up</option>
                    <option value="CHECKUP">General Checkup</option>
                    <option value="EMERGENCY">Emergency</option>
                  </select>
                </div> */}
              </div>

              {/* Footer */}
              <div className="mt-6 flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setBookAppointment(false)}
                  className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
