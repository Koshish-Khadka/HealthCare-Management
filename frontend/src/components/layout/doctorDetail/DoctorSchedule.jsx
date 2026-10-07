import React from "react";

const DoctorSchedule = () => {
  return (
    <div className="mt-4 p-3 rounded-md border border-stone-300 shadow-md">
      <div>
        <h1 className="font-semibold mb-1">Weekly Schedule</h1>
        <p className="text-[12px] text-stone-500 font-light">
          Shift rota for the current week
        </p>
      </div>
      {/* grid layout */}
      <div className="mt-4 grid grid-cols-7 gap-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-center border border-stone-300 rounded-md p-3 transition-all duration-200 hover:translate-0.5 hover:scale-105 hover:shadow-lg"
          >
            <p className="font-medium">{day}</p>
            <p className="text-sm text-stone-500">9:00 AM - 5:00 PM</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSchedule;
