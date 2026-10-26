import React from "react";
import ProfileCircle from "../common/ProfileCircle";
import Badge from "./Badge";
import { Mail, PhoneOutgoing, RotateCwClock, Shield } from "lucide-react";

const FindDoctorCard = () => {
  return (
    <div className="border p-3 rounded-lg shadow-sm border-stone-300 max-w-64 w-full">
      <div className="flex items-center justify-between gap-2">
        <div>
          <ProfileCircle username={"k"} />
        </div>
        <div>
          <h1 className="text-xs font-semibold">Dr Koshish Khadka</h1>
          <p className="text-xs font-light text-stone-500">Cardiologist</p>
        </div>
        <div>
          <Badge varient={"Success"} text={"Available"} />
        </div>
      </div>
      {/* content */}
      <div className="mt-2 space-y-2">
        <span className="flex items-center gap-1 text-xs text-stone-500">
          <Shield size={14} />
          <p>Cardiologist</p>
        </span>
        <span className="flex items-center gap-1 text-xs text-stone-500">
          <PhoneOutgoing size={14} />
          <p>+911 9843023686</p>
        </span>
        <span className="flex items-center gap-1 text-xs text-stone-500">
          <Mail size={14} />
          <p>koshishkhadka364@gmail.com</p>
        </span>
        <span className="flex items-center gap-1 text-xs text-stone-500">
          <RotateCwClock size={14} />
          <p>Full Time</p>
        </span>
      </div>
    </div>
  );
};

export default FindDoctorCard;
