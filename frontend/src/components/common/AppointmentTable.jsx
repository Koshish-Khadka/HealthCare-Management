import React from "react";

const AppointmentTable = () => {
  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      doctorName: "Dr. Alexander Fleming",
      date: "2026-09-10",
      time: "09:30 AM",
      type: "Checkup",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      doctorName: "Dr. Meredith Grey",
      date: "2026-09-10",
      time: "11:15 AM",
      type: "Follow-up",
    },
    {
      id: 3,
      patientName: "Michael Jordan",
      doctorName: "Dr. Gregory House",
      date: "2026-09-11",
      time: "02:00 PM",
      type: "Checkup",
    },
    {
      id: 4,
      patientName: "Clara Oswald",
      doctorName: "Dr. Charles Xavier",
      date: "2026-09-11",
      time: "04:30 PM",
      type: "Follow-up",
    },
    {
      id: 5,
      patientName: "Bruce Banner",
      doctorName: "Dr. Strange",
      date: "2026-09-12",
      time: "10:00 AM",
      type: "Emergency",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 text-sm text-gray-600">
      {/* <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"> */}
      {/* TABLE HEADER: Hidden on mobile, shown as a grid row on desktop */}
      <div className="hidden md:grid grid-cols-4 bg-gray-50 text-xs uppercase tracking-wider font-semibold text-gray-700 border-b border-gray-200 px-6 py-4">
        <div>When</div>
        <div>Patient</div>
        <div>Type</div>
        <div className="text-right">Doctor</div>
      </div>

      {/* TABLE ROWS: Flex-column on mobile, Grid-row on desktop */}
      <div className="divide-y divide-gray-200">
        {appointments.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-3 p-4 md:grid md:grid-cols-4 md:items-center md:gap-0 md:px-6 md:py-4 bg-white even:bg-gray-50/30 hover:bg-slate-50 transition-colors"
          >
            {/* Column 1: User Info */}
            <div className="flex flex-col">
              <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                when
              </span>
              <span className="font-semibold text-gray-900 md:font-medium">
                {data.time}
              </span>
              <span className="text-xs text-gray-400">{data.date}</span>
            </div>

            {/* Column 2: Role */}
            <div className="flex flex-col md:block">
              <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                Patient
              </span>
              <span className="font-medium text-gray-700 md:font-normal">
                {data.patientName}
              </span>
            </div>

            <div className="flex flex-col items-start md:block">
              <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                Type
              </span>
              <span
                className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                  data.type === "Checkup"
                    ? "bg-green-50 text-green-700 ring-green-600/20"
                    : data.status === "Emergency"
                      ? "bg-red-50 text-red-700 ring-red-600/20"
                      : "bg-yellow-50 text-yellow-700 ring-yellow-600/20"
                }`}
              >
                {data.type}
              </span>
            </div>
            <div className="flex justify-end pt-2 border-t border-gray-100 md:pt-0 md:border-none md:block md:text-right">
              <button className="text-indigo-600 hover:text-indigo-900 font-semibold cursor-pointer">
                {data.doctorName}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default AppointmentTable;
