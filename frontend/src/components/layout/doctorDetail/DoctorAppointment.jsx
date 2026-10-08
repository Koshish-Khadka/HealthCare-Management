import Table from "../../common/Table";

const DoctorAppointment = () => {
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
  ];

  const appointments = [
    {
      id: 1,
      Patient: "John Doe",
      Doctor: "Dr. Alexander Fleming",
      Specialization: "Cardiology",
      appointmentDate: "2026-10-12",
      Time: "09:30 AM",
      phone: "+1 (555) 019-2834",
      status: "COMPLETED",
    },
    {
      id: 2,
      Patient: "Jane Smith",
      Doctor: "Dr. Meredith Grey",
      Specialization: "General Medicine",
      appointmentDate: "2026-10-14",
      Time: "11:15 AM",
      phone: "+1 (555) 014-9876",
      status: "PENDING",
    },
    {
      id: 3,
      Patient: "Michael Jordan",
      Doctor: "Dr. Gregory House",
      Specialization: "Diagnostics",
      appointmentDate: "2026-10-15",
      Time: "02:00 PM",
      phone: "+1 (555) 017-4321",
      status: "CANCELLED",
    },
    {
      id: 4,
      Patient: "Clara Oswald",
      Doctor: "Dr. Who",
      Specialization: "Neurology",
      appointmentDate: "2026-10-20",
      Time: "04:30 PM",
      phone: "+1 (555) 012-5555",
      status: "CONFIRMED",
    },
  ];

  return (
    <div className="mt-4 rounded-md border border-stone-300  p-3">
      <Table
        data={appointments}
        columns={appointmentColumns}
        // loading={loading}
      />
    </div>
  );
};

export default DoctorAppointment;
