import Card from "../../components/common/Card";
import {
  UsersRound,
  ClipboardPlus,
  FlaskConical,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import DoughnutChart from "../../components/layout/DoughnutChart";
import BarChart from "../../components/layout/BarChart";
import Table from "../../components/common/Table";

const AdminDashboard = () => {
  const cardItems = [
    {
      id: 1,
      title: "Total Patients",
      number: 220,
      icon: UsersRound,
      subTitle: "Total Appointment",
    },
    {
      id: 2,
      title: "Total Doctors",
      number: 102,
      icon: HeartPulse,
      subTitle: "Cancelled Appointment",
    },
    {
      id: 3,
      title: "Total Appointment",
      number: 509,
      icon: ClipboardPlus,
      subTitle: "Pending Appointment",
    },
    {
      id: 5,
      title: "Pending Lab Test",
      number: 23,
      icon: FlaskConical,
      subTitle: "Completed Appointment",
    },
  ];

  const users = [
    {
      id: 1,
      username: "alice_jones",
      email: "alice.jones@example.com",
      role: "Admin",
      joinDate: "2024-03-15",
      status: "INACTIVE",
    },
    {
      id: 2,
      username: "bob_smith",
      email: "bob.smith@example.com",
      role: "Doctor",
      joinDate: "2025-01-10",
      status: "INACTIVE",
    },
    {
      id: 3,
      username: "charlie_brown",
      email: "charlie.b@example.com",
      role: "Patient",
      joinDate: "2025-06-22",
      status: "ACTIVE",
    },
    {
      id: 4,
      username: "diana_prince",
      email: "diana.p@example.com",
      role: "Doctor",
      joinDate: "2025-11-05",
      status: "ACTIVE",
    },
    {
      id: 5,
      username: "ethan_hunt",
      email: "ethan.hunt@example.com",
      role: "Receptionist",
      joinDate: "2026-02-18",
      status: "ACTIVE",
    },
  ];

  const userColumns = [
    {
      key: "username",
      header: "username",
    },
    {
      key: "email",
      header: "email",
    },
    {
      key: "joinDate",
      header: "joinDate",
    },
    {
      key: "role",
      header: "role",
    },
    {
      key: "status",
      header: "status",
      render: (value) => (
        <span
          className={value === "ACTIVE" ? "text-green-600" : "text-red-600"}
        >
          {value}
        </span>
      ),
    },
  ];
  return (
    <div>
      <h1 className="text-lg md:text-2xl font-semibold">Hospital Overview</h1>
      <p className="text-[12px] md:text-sm font-light text-stone-600">
        Live snapshot of admissions, capacity, and activity across Clinova
        General.
      </p>
      {/* card sections */}
      <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cardItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {/* piechart and bargraph */}

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch">
        <div className="w-full md:col-span-2 min-h-[300px]">
          <BarChart />
        </div>

        <div className="w-full md:col-span-1 min-h-[300px]">
          {/* <AvailableDoctor /> */}
          <DoughnutChart />
        </div>
      </div>
      {/*Users Tables */}
      <div className="mt-4 border border-stone-300 rounded-md shadow-2xl p-3">
        <div className="flex justify-between items-center ">
          <div className="space-y-1">
            <h2 className="text-xl text-stone-900 font-medium">
              Users Overview{" "}
            </h2>
            <p className="text-[12px] md:text-sm font-light text-stone-600">
              This tables shows the users detais
            </p>
          </div>
          <button className="flex items-center gap-2 border-none px-2 py-1 rounded-md text-sm transition-colors duration-150 ease-in-out hover:bg-[#004B8D] hover:text-white cursor-pointer">
            View all <ArrowRight />
          </button>
        </div>
        {/* <AppointmentTable /> */}
        <Table columns={userColumns} data={users} />
      </div>
    </div>
  );
};

export default AdminDashboard;
