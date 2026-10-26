import Breadcrumbs from "../../components/common/BreadCrumbs";
import { Eye, Plus, Search, SquarePen, Trash } from "lucide-react";
import Table from "../../components/common/Table";
import Badge from "../../components/ui/Badge";

const PatientAppointment = () => {
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
          <Eye color="#16a34a" size={24} className="hover:scale-110" />
          <SquarePen color="#4b5563" size={20} className="hover:scale-110" />
          <Trash
            color="#dc2626"
            size={20}
            className="hover:scale-110"
            onClick={() => setDeleteDialog(true)}
          />
        </span>
      ),
    },
  ];

  const appointmentData = [
    {
      id: "apt-001",
      Patient: "Eleanor Pena",
      Doctor: "Dr. Albert Flores",
      Specialization: "Cardiology",
      appointmentDate: "2026-10-15T09:30:00.000Z",
      Time: "09:30 AM",
      phone: "(307) 555-0133",
      status: "COMPLETED",
    },
    {
      id: "apt-002",
      Patient: "Jane Cooper",
      Doctor: "Dr. Kristin Watson",
      Specialization: "Dermatology",
      appointmentDate: "2026-10-18T14:15:00.000Z",
      Time: "02:15 PM",
      phone: "(209) 555-0104",
      status: "PENDING",
    },
    {
      id: "apt-003",
      Patient: "Guy Hawkins",
      Doctor: "Dr. Robert Fox",
      Specialization: "Pediatrics",
      appointmentDate: "2026-10-12T11:00:00.000Z",
      Time: "11:00 AM",
      phone: "(406) 555-0120",
      status: "CANCELLED",
    },
    {
      id: "apt-004",
      Patient: "Esther Howard",
      Doctor: "Dr. Courtney Henry",
      Specialization: "Neurology",
      appointmentDate: "2026-10-22T16:00:00.000Z",
      Time: "04:00 PM",
      phone: "(602) 555-0199",
      status: "UPCOMING",
    },
    {
      id: "apt-005",
      Patient: "Cameron Williamson",
      Doctor: "Dr. Dianne Russell",
      Specialization: "General Medicine",
      appointmentDate: "2026-10-14T08:00:00.000Z",
      Time: "08:00 AM",
      phone: "(253) 555-0115",
      status: "PENDING",
    },
  ];

  return (
    <div>
      <Breadcrumbs />
      <div className="flex justify-between items-center p-3 rounded-md bg-white my-4">
        <div className="space-y-1">
          <h1 className="text-lg md:text-2xl font-bold">Appointments</h1>
          <p className="text-xs md:text-sm font-light text-stone-600">
            View, schedule,and manage your appointments.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden relative w-full max-w-68 lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input
              type="text"
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search your appointment..."
            />
          </div>
          <button
            className="flex cursor-pointer items-center gap-2 rounded-md border border-stone-300 bg-[#004B8D] px-4 py-1 text-white transition-colors duration-200 hover:bg-[#0764b5]"
            // onClick={() => setBookAppointment(true)}
          >
            <Plus size={18} />
            Book Appointment
          </button>
        </div>
      </div>
      {/* Table */}
      <Table
        data={appointmentData}
        columns={appointmentColumns}
        // loading={loading}
      />
    </div>
  );
};

export default PatientAppointment;
