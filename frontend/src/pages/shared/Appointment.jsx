import React, { useEffect, useState } from "react";
import api from "../../lib/axios";
import { Eye, Plus, Search, SquarePen, Trash } from "lucide-react";
import Table from "../../components/common/Table";
import BookAppointment from "../patient/BookAppointment";

const Appointment = () => {
  const [allAppointment, setAllAppointment] = useState(null || []);
  const [loading, setLoading] = useState(false);
  const [bookAppointment, setBookAppointment] = useState(false);
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
          <Eye color="#16a34a" size={24} className="hover:scale-110"/>
          <SquarePen color="#4b5563" size={20} className="hover:scale-110"/>
          <Trash color="#dc2626" size={20} className="hover:scale-110"/>
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
  useEffect(() => {
    fetchAllAppointment();
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
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
        />
      )}

      <div
        className={`
    fixed right-0 top-0 z-[60]
    h-screen w-full sm:w-[500px] lg:w-[600px]
    bg-stone-100 shadow-xl
    transition-transform duration-300 ease-in-out
    ${bookAppointment ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-300 p-4">
          <h2 className="text-lg font-semibold">Book Appointment</h2>

          <button
            onClick={() => setBookAppointment(false)}
            className="cursor-pointer text-xl text-stone-500 hover:text-stone-800"
          >
            ×
          </button>
        </div>

        <div className="h-[calc(100vh-65px)] overflow-y-auto p-4">
          <BookAppointment />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
