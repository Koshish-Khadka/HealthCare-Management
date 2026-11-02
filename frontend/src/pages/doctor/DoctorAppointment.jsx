import React from "react";
import { Eye, Plus, Search, SquarePen, Trash } from "lucide-react";
import { useUser } from "../../context/userContext";
import Breadcrumbs from "../../components/common/BreadCrumbs";
import Table from "../../components/common/Table";
import Badge from "../../components/ui/Badge";

const DoctorAppointment = () => {
  const { profileData } = useUser();

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
        <Badge
          varient={
            value === "COMPLETED"
              ? "Success"
              : value === "CANCELLED"
                ? "Danger"
                : value === "PENDING"
                  ? "Warning"
                  : "Brand"
          }
          text={value}
        />
      ),
    },
    {
      key: "action",
      header: "Action",
      render: () => (
        <span className="flex flex-col items-center md:flex-row gap-3 cursor-pointer">
          <Eye color="#16a34a" size={20} className="hover:scale-110" />
          <SquarePen color="#4b5563" size={18} className="hover:scale-110" />
          <Trash
            color="#dc2626"
            size={18}
            className="hover:scale-110"
            onClick={() => setDeleteDialog(true)}
          />
        </span>
      ),
    },
  ];

  const appointment = profileData?.profile?.appointments;

  const formattedAppointments = appointment.map((appointment) => ({
    id: appointment.id,
    Patient: `${appointment.patient.first_name} ${appointment.patient.last_name}`,
    Doctor: appointment.doctor.name,
    Specialization: appointment.doctor.specialization,
    appointmentDate: appointment.appointmentDate,
    Time: appointment.time,
    phone: appointment.patient.phone,
    status: appointment.status,
  }));

  return (
    <div>
      <Breadcrumbs />
      <div className="flex justify-between items-center p-3 rounded-md bg-white my-4">
        <div className="space-y-1">
          <h1 className="text-lg md:text-2xl font-bold">Appointments</h1>
          <p className="text-xs md:text-sm font-light text-stone-600">
            View, schedule, and manage patient appointments.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden relative w-full max-w-68 lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input
              type="text"
              //   onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search appointment..."
            />
          </div>
        </div>
      </div>
      <Table
        data={formattedAppointments}
        columns={appointmentColumns}
        // loading={loading}
      />
    </div>
  );
};

export default DoctorAppointment;
