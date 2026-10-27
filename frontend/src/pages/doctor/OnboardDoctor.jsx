import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import api from "../../lib/axios";
import { useAuth } from "../../context/authContext";

const OnboardDoctor = () => {
  const DAYS_OF_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);
  const { profileData } = useUser();
  const { user } = useAuth();

  const onBoardingDoctorRequired =
    user?.role === "DOCTOR" &&
    (!profileData?.profile?.workingDays ||
      profileData.profile.workingDays.length === 0);

  const handleDayToggle = (day) => {
    const exists = schedule.find((s) => s.day === day);
    if (exists) {
      setSchedule(schedule.filter((s) => s.day !== day));
    } else {
      setSchedule([
        ...schedule,
        { day, start_time: "09:00", close_time: "17:00" },
      ]);
    }
  };

  // Handle changing times
  const handleTimeChange = (day, field, value) => {
    setSchedule(
      schedule.map((s) => (s.day === day ? { ...s, [field]: value } : s)),
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (schedule.length === 0)
      return alert("Please select at least one working day.");
    try {
      await api.post("/doctors/working-days", {
        doctor_id: profileData?.profile.id,
        schedule: schedule,
      });
      alert("Onboard Sucessfull");
      window.location.reload();
    } catch (error) {
      console.log("Failed to add working schedule", error);
    }
  };

  //   check if the data already exists
  useEffect(() => {
    if (!onBoardingDoctorRequired) {
      navigate("/dashboard");
    }
  }, [user, profileData]);

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Set Your Working Schedule</h2>
      <p className="mb-4 text-gray-600">
        Please select your available days and hours to complete your profile
        setup.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-evenly gap-3 mb-5">
          {DAYS_OF_WEEK.map((day) => {
            const isSelected = schedule.some((s) => s.day === day);
            const dayData = schedule.find((s) => s.day === day) || {};

            return (
              <div
                key={day}
                className="flex flex-col text-center items-center gap-4 p-3 border border-stone-300 bg-white rounded-md transition-all hover:border-green-700  duration-200 ease-in-out"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={isSelected}
                  onChange={() => handleDayToggle(day)}
                />
                <span className="w-24 font-medium">{day}</span>

                {isSelected && (
                  <div className="flex gap-2 items-center">
                    <input
                      type="time"
                      className="border p-1 rounded"
                      value={dayData.start_time}
                      onChange={(e) =>
                        handleTimeChange(day, "start_time", e.target.value)
                      }
                    />
                    <span>to</span>
                    <input
                      type="time"
                      className="border border-stone-300 bg-white p-1 rounded"
                      value={dayData.close_time}
                      onChange={(e) =>
                        handleTimeChange(day, "close_time", e.target.value)
                      }
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className=" px-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Schedule & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardDoctor;
