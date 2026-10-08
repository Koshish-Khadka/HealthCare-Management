import { Mail, Phone, ShieldUser } from "lucide-react";
import React from "react";

const PatientProfile = () => {
  return (
    <div className="border border-stone-300 rounded-md shadow-md p-3">
      <div className="flex justify-between items-center max-w-6xl m-auto">
        <div className="flex items-center  gap-4">
          <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#004B8D]">
            <span className="text-2xl font-bold text-white">K</span>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex gap-2 items-center">
              <h1 className="text-lg font-bold">
                <span>Koshish Khadka</span>
              </h1>
              <button className=" bg-transparent text-emerald-700 border border-emerald-500 rounded-md px-2 py-1 text-sm font-semibold">
                Active
              </button>
            </div>
            <p className="flex items-center gap-2 text-sm text-stone-600 font-light">
              <Mail size={18} /> <span>koshishkhadka321@gmail.com</span>
            </p>
            <p className="flex items-center gap-2 text-sm text-stone-600 font-light">
              <div className="flex items-center gap-2">
                <Phone size={18} /> <span>9843023686</span>
              </div>
              <div className="flex items-center gap-2 ">
                <ShieldUser size={18} /> <span>Male</span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
