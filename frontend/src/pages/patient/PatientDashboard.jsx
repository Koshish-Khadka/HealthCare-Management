import { Briefcase, CircleCheck, Menu, TrendingUp } from "lucide-react";
import React from "react";
import Card from "../../components/common/Card";
import PatientTable from "../../components/layout/PatientTable";
import AvailableDoctor from "../../components/layout/AvailableDoctor";

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
      <div className="grid gap-4 grid-cols-1 mt-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <PatientTable />
        </div>
        <div className="md:col-span-1">
          <AvailableDoctor />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
