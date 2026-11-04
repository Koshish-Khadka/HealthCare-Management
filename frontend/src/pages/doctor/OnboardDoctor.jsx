import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
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
  const { profileData } = useUser();
  const { user } = useAuth();
  const [schedule, setSchedule] = useState([]);
  const [yearsExperience, setYearsExperience] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [education, setEducation] = useState("");
  const [awards, setAwards] = useState("");
  const [loading, setLoading] = useState(false);

  const onBoardingDoctorRequired =
    user?.role === "DOCTOR" &&
    (!profileData?.profile?.workingDays ||
      profileData.profile.workingDays.length === 0);

  // Quill Toolbar Configuration
  const quillModules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

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

  const handleTimeChange = (day, field, value) => {
    setSchedule(
      schedule.map((s) => (s.day === day ? { ...s, [field]: value } : s)),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (schedule.length === 0) {
      setLoading(false);
      return alert("Please select at least one working day.");
    }

    const payload = {
      doctor_id: profileData?.profile.id,
      yearsExperience,
      workExperience,
      education,
      awards,
      schedule, // <-- Include schedule in the same payload
    };

    try {
      // Send exactly ONE request
      await api.post("/doctors/onboard-doctor", payload);

      alert("Onboard Successful");
      window.location.reload();
    } catch (error) {
      console.log("Failed to onboard doctor", error);
    } finally {
      setLoading(false);
    }
  };
  //   check if the data already exists
  useEffect(() => {
    if (!onBoardingDoctorRequired) {
      navigate("/dashboard");
    }
  }, [user, profileData]);

  return (
    <div className="mx-auto max-w-5xl border border-stone-300 rounded-lg bg-white p-4 shadow-sm ">
      <div className="mb-4 ">
        <h2 className="text-xl font-bold">
          Set you Doctor Schedule and Professional Profile
        </h2>
        <p className="mt-1 text-sm text-stone-600">
          Please provide your working days, hours, and professional details to
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="space-y-8 pt-2">
          <div>
            <h2 className="text-lg font-medium mb-4">Professional Profile</h2>

            {/* Simple Input */}
            <div className="mb-6 max-w-sm">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Years of Experience
              </label>
              <input
                type="number"
                min="0"
                value={yearsExperience}
                onChange={(e) => setYearsExperience(e.target.value)}
                placeholder="e.g. 5"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Rich Text: Work Experience */}
            <div className="mb-12">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Work Experience Description
              </label>
              <div className="h-64 pb-12">
                <ReactQuill
                  theme="snow"
                  value={workExperience}
                  onChange={setWorkExperience}
                  modules={quillModules}
                  className="h-full"
                  placeholder="Detail your past roles, hospital affiliations, and specialties..."
                />
              </div>
            </div>

            {/* Rich Text: Education & Training */}
            <div className="mb-12">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Education & Training
              </label>
              <div className="h-64 pb-12">
                <ReactQuill
                  theme="snow"
                  value={education}
                  onChange={setEducation}
                  modules={quillModules}
                  className="h-full"
                  placeholder="List your medical degrees, residencies, and fellowships..."
                />
              </div>
            </div>

            {/* Rich Text: Memberships & Awards */}
            <div className="mb-12">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Memberships & Awards
              </label>
              <div className="h-64 pb-12">
                <ReactQuill
                  theme="snow"
                  value={awards}
                  onChange={setAwards}
                  modules={quillModules}
                  className="h-full"
                  placeholder="Include medical board memberships, publications, or awards..."
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-medium mb-4">Set Your Availability</h2>

          <div className="flex flex-wrap justify-evenly gap-2 mb-4">
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
        </section>

        {/* Submit Button */}
        <div className="flex justify-end border-t pt-6">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Schedule & Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardDoctor;
