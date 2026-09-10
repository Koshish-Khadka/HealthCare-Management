import {
  ArrowRight,
  Briefcase,
  CircleCheck,
  Menu,
  TrendingUp,
} from "lucide-react";

import Card from "../../components/common/Card";
import AvailableDoctor from "../../components/layout/AvailableDoctor";
import PatientLineChart from "../../components/layout/PatientLineChart";
import Table from "../../components/common/Table";

const PatientDashboard = () => {
 

  const cardItems = [
    {
      id: 1,
      title: "Appointment",
      number: 0,
      icon: Briefcase,
      subTitle: "Total Appointment",
    },
    {
      id: 2,
      title: "Cancelled",
      number: 10,
      icon: Menu,
      subTitle: "Cancelled Appointment",
    },
    {
      id: 3,
      title: "Pending",
      number: 5,
      icon: TrendingUp,
      subTitle: "Pending Appointment",
    },
    {
      id: 5,
      title: "Completed",
      number: 23,
      icon: CircleCheck,
      subTitle: "Completed Appointment",
    },
  ];

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
  ];

  const appointmentColumns = [
    {
      key: "Time",
      header: "Time",
      width: "1.2fr",
      render: (_, row) => (
        <span className="font-semibold text-gray-900 md:font-medium">
          {row.time}
        </span>
      ),
    },
    {
      key: "Date",
      header: "Date",
      width: "1.2fr",
      render: (_, row) => (
        <span className="font-semibold text-gray-900 md:font-medium">
          {row.date}
        </span>
      ),
    },

    {
      key: "patientName",
      header: "Patient",
      width: "1.5fr",
    },

    {
      key: "type",
      header: "Type",
      width: "1fr",
      render: (value) => (
        <span
          className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
            value === "Checkup"
              ? "bg-green-50 text-green-700 ring-green-600/20"
              : value === "Emergency"
                ? "bg-red-50 text-red-700 ring-red-600/20"
                : "bg-yellow-50 text-yellow-700 ring-yellow-600/20"
          }`}
        >
          {value}
        </span>
      ),
    },

    {
      key: "doctorName",
      header: "Doctor",
      width: "1.5fr",
      render: (value) => (
        <button className="font-semibold text-indigo-600 hover:text-indigo-900">
          {value}
        </button>
      ),
    },
  ];


  return (
    <div>
      <h1 className="text-lg md:text-2xl font-semibold">
        Welcome back, Koshish Khadka
      </h1>
      <p className="text-[12px] md:text-sm font-light text-stone-600">
        Your appointment, prescriptions, results, and bills in one place
      </p>
      {/* card sections */}
      <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cardItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {/* table and available doctors */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch">
        <div className="md:col-span-2 min-h-[300px]">
          <PatientLineChart />
        </div>

        <div className="md:col-span-1 min-h-[300px]">
          <AvailableDoctor />
        </div>
      </div>
      {/* Appointment Table */}
      {/* <div className="mt-4"> */}
      <div className="mt-4 border border-stone-300 rounded-md shadow-2xl p-3">
        <div className="flex justify-between items-center ">
          <div className="space-y-1">
            <h2 className="text-xl text-stone-900 font-medium">
              Appointments Overview{" "}
            </h2>
            <p className="text-[12px] md:text-sm font-light text-stone-600">
              This tables shows the appointment detais
            </p>
          </div>
          <button className="flex items-center gap-2 border-none px-2 py-1 rounded-md text-sm transition-colors duration-150 ease-in-out hover:bg-[#004B8D] hover:text-white cursor-pointer">
            View all <ArrowRight />
          </button>
        </div>
        {/* <AppointmentTable /> */}
        <Table columns={appointmentColumns} data={appointments} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default PatientDashboard;
