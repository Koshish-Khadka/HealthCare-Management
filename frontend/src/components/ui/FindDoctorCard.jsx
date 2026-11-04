import React from "react";
import ProfileCircle from "../common/ProfileCircle";
import Badge from "./Badge";
import { Mail, PhoneOutgoing, RotateCwClock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const FindDoctorCard = ({ doctor, key }) => {
  return (
    <div
      className="w-full min-w-0 max-w-sm rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
      key={key}
    >
      {/* Header */}
      <div className="flex min-w-0 items-start gap-3">
        <div className="shrink-0">
          <ProfileCircle username={doctor.name.charAt(0)} />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="break-words text-sm font-semibold leading-5 text-stone-800">
            {doctor.name}
          </h2>
          <p className="mt-1 text-sm text-stone-500">{doctor.department}</p>
        </div>

        <div className="shrink-0">
          <Badge varient={"Success"} text={doctor.availability_status} />
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-stone-200" />

      {/* Doctor Details */}
      <div className="space-y-3">
        <div className="flex items-start gap-3 text-sm text-stone-600">
          <Shield size={17} className="mt-0.5 shrink-0 text-stone-400" />
          <span className="break-words">{doctor.specialization}</span>
        </div>

        <div className="flex items-start gap-3 text-sm text-stone-600">
          <PhoneOutgoing size={17} className="mt-0.5 shrink-0 text-stone-400" />
          <span className="break-words">{doctor.phone}</span>
        </div>

        <div className="flex items-start gap-3 text-sm text-stone-600">
          <Mail size={17} className="mt-0.5 shrink-0 text-stone-400" />
          <span className="min-w-0 break-all">{doctor.email}</span>
        </div>

        <div className="flex items-start gap-3 text-sm text-stone-600">
          <RotateCwClock size={17} className="mt-0.5 shrink-0 text-stone-400" />
          <span>{doctor.job_type}</span>
        </div>
      </div>

      {/* Action */}
      <button
        type="button"
        className="mt-5 w-full rounded-lg bg-[#004B8D] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#00396B] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Link to={`/dashboard/doctors/${doctor.id}`}>View Profile</Link>
      </button>
    </div>
  );
};

export default FindDoctorCard;
