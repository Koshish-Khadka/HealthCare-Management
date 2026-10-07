import React from "react";

const DoctorCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="border border-stone-300 rounded-md shadow-md p-3">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-[#004B8D] border-2">
          <Icon size={24} className="text-[#004B8D]" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="text-sm text-stone-600">{item.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
