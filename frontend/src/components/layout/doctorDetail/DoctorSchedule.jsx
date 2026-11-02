import React from "react";

const DoctorSchedule = ({ doctorScheduleData }) => {
  console.log("doctor schedule data", doctorScheduleData);
  return (
    <div className="mt-4 p-3 rounded-md border border-stone-300 ">
      <div>
        <h1 className="font-semibold mb-1">Weekly Schedule</h1>
        <p className="text-[12px] text-stone-500 font-light">
          Shift rota for the current week
        </p>
      </div>
      {/* grid layout */}
      <div className="mt-4 flex justify-evenly">
        {doctorScheduleData?.workingDays?.map((data) => (
          <div
            key={data.id}
            className="text-center border border-stone-300 rounded-md p-3"
          >
            <p className="font-medium">{data.day}</p>
            <p className="text-sm text-stone-500">
              {data.start_time} - {data.close_time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSchedule;
