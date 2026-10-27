import React from "react";
import Breadcrumbs from "../../components/common/BreadCrumbs";
import FindDoctorCard from "../../components/ui/FindDoctorCard";
import { Search } from "lucide-react";

const FindDoctor = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className="p-3 rounded-md bg-white my-4">
        <div className="space-y-1 flex justify-between items-center">
          <div>
            <h1 className="text-lg md:text-2xl font-bold">Find Doctor</h1>
            <p className="text-xs md:text-sm font-light text-stone-600">
              View, schedule,and manage your appointments.
            </p>
          </div>
          <div>
            <div className="hidden relative w-full max-w-68 lg:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
                <Search className="w-4 h-4 text-slate-500" />
              </div>
              <input
                type="text"
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by Doctor.."
              />
            </div>
          </div>
        </div>
        {/* Doctor card */}
        <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-3">
          <FindDoctorCard />
          <FindDoctorCard />
          <FindDoctorCard />
          <FindDoctorCard />
          <FindDoctorCard />
          <FindDoctorCard />
          <FindDoctorCard />
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
