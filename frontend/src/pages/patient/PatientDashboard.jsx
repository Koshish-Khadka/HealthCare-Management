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
import AppointmentTable from "../../components/common/AppointmentTable";

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
      <div className="mt-4">
        <div className="border border-stone-300 rounded-md shadow-2xl p-3">
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
          <AppointmentTable />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
