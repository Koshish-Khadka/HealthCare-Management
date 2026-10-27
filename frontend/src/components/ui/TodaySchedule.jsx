import React from "react";
import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";
import Badge from "../../components/ui/Badge";

const TodaySchedule = () => {
  const appointments = [
    {
      id: 1,
      time: "09:00 AM",
      patient: "Aarav Sharma",
      type: "General Consultation",
      status: "SCHEDULED",
    },
    {
      id: 2,
      time: "10:30 AM",
      patient: "Sofia Williams",
      type: "Follow-up Visit",
      status: "PENDING",
    },
    {
      id: 3,
      time: "11:15 AM",
      patient: "Rahul Thapa",
      type: "Cardiology Consultation",
      status: "SCHEDULED",
    },
    {
      id: 4,
      time: "01:00 PM",
      patient: "Emma Wilson",
      type: "General Consultation",
      status: "COMPLETED",
    },

  ];

  const getBadgeVariant = (status) => {
    switch (status) {
      case "SCHEDULED":
        return "Success";
      case "PENDING":
        return "Warning";
      case "COMPLETED":
        return "Info";
      case "CANCELLED":
        return "Danger";
      default:
        return "Info";
    }
  };

  return (
    <section className="w-full rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-stone-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-stone-800">
            Today's Schedule
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Your appointments for today
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-lg bg-blue-50 px-3 py-2 text-sm text-[#004B8D] sm:self-auto">
          <CalendarDays size={16} />
          <span>{appointments.length} appointments</span>
        </div>
      </div>

      {/* Appointment Timeline */}
      <div className="mt-4 space-y-1">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <div
              key={appointment.id}
              className="group flex gap-3 rounded-lg p-3 transition hover:bg-stone-50 sm:gap-4"
            >
              {/* Time */}
              <div className="w-[76px] shrink-0 pt-1 sm:w-24">
                <p className="text-xs font-semibold text-stone-700 sm:text-sm">
                  {appointment.time}
                </p>
              </div>

              {/* Timeline Indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
                    appointment.status === "COMPLETED"
                      ? "bg-green-500"
                      : appointment.status === "PENDING"
                        ? "bg-amber-500"
                        : appointment.status === "CANCELLED"
                          ? "bg-red-500"
                          : "bg-[#004B8D]"
                  }`}
                />

                {index !== appointments.length - 1 && (
                  <div className="mt-1 min-h-12 w-px flex-1 bg-stone-200" />
                )}
              </div>

              {/* Appointment Details */}
              <div className="min-w-0 flex-1 pb-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="break-words text-sm font-semibold text-stone-800">
                      {appointment.patient}
                    </h3>

                    <p className="mt-1 flex items-start gap-1.5 text-xs text-stone-500 sm:text-sm">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      <span>{appointment.type}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:justify-end">
                    <Badge
                      varient={getBadgeVariant(appointment.status)}
                      text={
                        appointment.status.charAt(0) +
                        appointment.status.slice(1).toLowerCase()
                      }
                    />

                    <button
                      type="button"
                      onClick={() =>
                        console.log("View appointment:", appointment.id)
                      }
                      aria-label={`View appointment for ${appointment.patient}`}
                      className="rounded-md p-1.5 text-stone-400 transition hover:bg-blue-50 hover:text-[#004B8D]"
                    >
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <Clock size={30} className="text-stone-400" />
            <p className="mt-3 text-sm font-medium text-stone-700">
              No appointments today
            </p>
            <p className="mt-1 text-xs text-stone-500">
              Your schedule is clear for today.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TodaySchedule;
