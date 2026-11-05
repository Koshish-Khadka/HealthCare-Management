import React, { useEffect, useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import DOMPurify from "dompurify";
import api from "../../lib/axios";
import { useAuth } from "../../context/authContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/common/BreadCrumbs";

const DoctorDetail = ({ doctorId }) => {
  const { user } = useAuth();

  const [doctorScheduleData, setDoctorScheduleData] = useState([]);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);

  const [bookAppointment, setBookAppointment] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookingLoading, setBookingLoading] = useState(false);

  const fetchWorkingDays = async () => {
    try {
      const response = await api.get(`/doctors/working-days/${doctorId}`);
      setDoctorScheduleData(response.data);
    } catch (error) {
      console.log("Error fetching schedule data", error);
    }
  };

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/doctors/${doctorId}`);
        setDoctor(response.data.doctor);
      } catch (error) {
        console.error("Failed to fetch doctor details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctorDetails();
  }, [doctorId]);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (appointmentDate) {
        try {
          setLoadingSlots(true);
          const response = await api.get(`/appointment/available-slots`, {
            params: {
              doctor_id: doctorId,
              date: appointmentDate,
            },
          });
          setAvailableSlots(response.data.availableSlots);

          setSelectedTime("");
        } catch (error) {
          console.log("Failed to fetch slots", error);
          setAvailableSlots([]);
        } finally {
          setLoadingSlots(false);
        }
      } else {
        setAvailableSlots([]);
      }
    };

    fetchAvailableSlots();
  }, [appointmentDate, doctorId]);

  useEffect(() => {
    fetchWorkingDays();
  }, [doctorId]);

  // ADDED: Function to handle time selection
  const handleTimeSelect = (slotTime) => {
    setSelectedTime(slotTime);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!appointmentDate || !selectedTime) return;

    try {
      setBookingLoading(true);
      // add the booking API CALLL
      console.log("Booking successful for:", appointmentDate, selectedTime);
      setBookAppointment(false);
      setAppointmentDate("");
      setSelectedTime("");
    } catch (error) {
      console.log("Failed to book appointment", error);
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading Profile...</div>;
  if (!doctor)
    return (
      <div className="p-8 text-center text-red-500">Doctor not found.</div>
    );

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen font-sans">
      <div className="mb-4">
        <Breadcrumbs />
      </div>

      <div className="space-y-4">
        {/* Doctor Header Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-start gap-5 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#004B8D] text-white flex items-center justify-center text-2xl font-semibold shrink-0">
            {doctor.name.charAt(0).toUpperCase()}
          </div>

          <div className="flex justify-between items-center w-full">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-xl font-bold text-gray-900">
                  {doctor.name}
                </h1>
                {doctor.availability_status === "AVAILABLE" && (
                  <span className="bg-green-100 text-green-700 px-3 py-0.5 rounded-full text-xs font-medium border border-green-200">
                    Active
                  </span>
                )}
              </div>

              <div className="text-sm text-gray-500 max-w-md leading-relaxed">
                {[
                  doctor.specialization,
                  doctor.department,
                  doctor.experience
                    ? `${doctor.experience} years of experience`
                    : null,
                  doctor.email,
                  doctor.phone,
                  doctor.job_type?.replace("_", " "),
                ]
                  .filter(Boolean)
                  .join(", ")}
              </div>
            </div>

            <div>
              {user?.role === "PATIENT" && (
                <button
                  className="mt-4 bg-[#004B8D] text-white px-4 py-2 rounded-md hover:bg-[#003a6b] transition-colors"
                  onClick={() => setBookAppointment(true)}
                >
                  Book Appointment
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Weekly Schedule Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">Weekly Schedule</h2>
          <p className="text-xs text-gray-500 mb-5">
            Shift rota for the current week
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {doctor?.workingDays?.map(
              (
                day, // FIXED: Mapped over doctorScheduleData instead of doctor.workingDays
              ) => (
                <div
                  key={day.id}
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-md bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800 mb-1">
                    {day.day}
                  </span>
                  <span className="text-sm text-gray-500">
                    {day.start_time} - {day.close_time}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Work Experience */}
        {doctor?.work_experience && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">
              Work Experience
            </h2>
            <div
              className="prose prose-sm max-w-none text-gray-700 leading-relaxed break-words"
              dangerouslySetInnerHTML={{
                // Replace all &nbsp; with a standard space before sanitizing
                __html: DOMPurify.sanitize(
                  doctor.education.replace(/&nbsp;/g, " "),
                ),
              }}
            />
          </div>
        )}

        {/* Education & Training */}
        {doctor?.education && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">
              Education & Training
            </h2>
            <div
              className="prose prose-sm max-w-none text-gray-700 leading-relaxed break-words"
              dangerouslySetInnerHTML={{
                // Replace all &nbsp; with a standard space before sanitizing
                __html: DOMPurify.sanitize(
                  doctor.education.replace(/&nbsp;/g, " "),
                ),
              }}
            />
          </div>
        )}

        {/* Memberships & Awards */}
        {doctor?.memberships_awards && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">
              Memberships & Awards
            </h2>
            <div
              className="prose prose-sm max-w-none text-gray-700 leading-relaxed break-words"
              dangerouslySetInnerHTML={{
                // Replace all &nbsp; with a standard space before sanitizing
                __html: DOMPurify.sanitize(
                  doctor.education.replace(/&nbsp;/g, " "),
                ),
              }}
            />
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {bookAppointment && (
        <div
          onClick={() => setBookAppointment(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Book Appointment
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Schedule an appointment with a doctor.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setBookAppointment(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form className="p-6" onSubmit={handleBookingSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="col-span-2 border-t pt-4 mt-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full md:w-1/2 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    name="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Time Slot Grid */}
                {appointmentDate && (
                  <div className="col-span-2">
                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Available Time Slots
                    </label>

                    {loadingSlots ? (
                      <div className="text-sm text-blue-600 animate-pulse">
                        Checking doctor's schedule...
                      </div>
                    ) : availableSlots.length > 0 ? (
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                        {availableSlots.map((slotTime) => (
                          <button
                            key={slotTime}
                            type="button"
                            onClick={() => handleTimeSelect(slotTime)}
                            className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                              selectedTime === slotTime // FIXED: Checking against new selectedTime state
                                ? "bg-blue-600 border-blue-600 text-white shadow-md scale-105"
                                : "bg-white border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                            }`}
                          >
                            {slotTime}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-100">
                        Dr. is not available on this date or all slots are
                        booked. Please select another date.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setBookAppointment(false)}
                  className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={!appointmentDate || !selectedTime || bookingLoading} // FIXED: Requires both date and time
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {bookingLoading ? "Booking..." : "Confirm Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDetail;
