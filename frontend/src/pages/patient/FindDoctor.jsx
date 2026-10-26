import React from "react";
import Breadcrumbs from "../../components/common/BreadCrumbs";
import FindDoctorCard from "../../components/ui/FindDoctorCard";

const FindDoctor = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className="p-3 rounded-md bg-white my-4">
        <div className="space-y-1">
          <h1 className="text-lg md:text-2xl font-bold">Find Doctor</h1>
          <p className="text-xs md:text-sm font-light text-stone-600">
            View, schedule,and manage your appointments.
          </p>
        </div>
        {/* Doctor card */}
        <div className="mt-4 grid gap-4 grid-cols-2 md:grid-cols-5">
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
