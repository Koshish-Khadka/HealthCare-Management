import React, { useEffect, useState } from "react";
import api from "../../lib/axios";
import { Eye, Plus, Search, SquarePen, Trash } from "lucide-react";
import Table from "../../components/common/Table";
import { usePatient } from "../../context/patientContent";
import Breadcrumbs from "../../components/common/BreadCrumbs";
import { useDoctor } from "../../context/doctorContext";
import DeletePopUp from "../../components/common/DeletePopUp";
import Badge from "../../components/ui/Badge";
const AdminAppointment = () => {
  const [allAppointment, setAllAppointment] = useState(null || []);
  const [loading, setLoading] = useState(true);
  const [bookAppointment, setBookAppointment] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [input, setInput] = useState({
    patientId: "",
    doctorId: "",
    appointmentDate: "",
    time: "",
  });
  const { patientData } = usePatient();
  const { doctorData } = useDoctor();
  const [searchQuery, setSearchQuery] = useState("");

  const appointmentColumns = [
    {
      key: "Patient",
      header: "Patient",
    },
    {
      key: "Doctor",
      header: "Doctor",
    },
    {
      key: "Specialization",
      header: "Specialization",
    },
    {
      key: "appointmentDate",
      header: "Appointment Date",
      width: "1.2fr",
      render: (value) => <span>{new Date(value).toLocaleDateString()}</span>,
    },
    {
      key: "Time",
      header: "Time",
    },
    {
      key: "phone",
      header: "Contact",
    },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <Badge
          varient={
            value === "COMPLETED"
              ? "Success"
              : value === "CANCELLED"
                ? "Danger"
                : value === "PENDING"
                  ? "Warning"
                  : "Brand"
          }
          text={value}
        />
      ),
    },
    {
      key: "action",
      header: "Action",
      render: () => (
        <span className="flex flex-col items-center md:flex-row gap-3 cursor-pointer">
          <Eye color="#16a34a" size={20} className="hover:scale-110" />
          <SquarePen color="#4b5563" size={18} className="hover:scale-110" />
          <Trash
            color="#dc2626"
            size={18}
            className="hover:scale-110"
            onClick={() => setDeleteDialog(true)}
          />
        </span>
      ),
    },
  ];

  const handleAppointmentDelete = () => {
    alert("Patient deleted");
  };

  const fetchAllAppointment = async () => {
    try {
      setLoading(true);
      const response = await api.get("/appointment/getAllAppointment");
      setAllAppointment(response.data.appointments);
    } catch (error) {
      console.log("Failed to fetch all appointment", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllAppointment();
  }, []);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      // Only fetch if both doctor and date are selected
      if (input.doctorId && input.appointmentDate) {
        try {
          setLoadingSlots(true);
          const response = await api.get(`/appointment/available-slots`, {
            params: {
              doctor_id: input.doctorId,
              date: input.appointmentDate,
            },
          });
          setAvailableSlots(response.data.availableSlots);

          // Reset the selected time if the date/doctor changes
          setInput((prev) => ({ ...prev, time: "" }));
        } catch (error) {
          console.log("Failed to fetch slots", error);
          setAvailableSlots([]);
        } finally {
          setLoadingSlots(false);
        }
      } else {
        setAvailableSlots([]); // Clear slots if doctor/date is unselected
      }
    };

    fetchAvailableSlots();
  }, [input.doctorId, input.appointmentDate]);

  const formattedAppointments = allAppointment.map((appointment) => ({
    id: appointment.id,
    Patient: `${appointment.patient.first_name} ${appointment.patient.last_name}`,
    Doctor: appointment.doctor.name,
    Specialization: appointment.doctor.specialization,
    appointmentDate: appointment.appointmentDate,
    Time: appointment.time,
    phone: appointment.patient.phone,
    status: appointment.status,
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const createAppointment = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/admin/appointments", {
        patient_id: input.patientId,
        doctor_id: input.doctorId,
        appointmentDate: input.appointmentDate,
        time: input.time,
      });
      console.log("Appointment created successfully", response.data);
      alert("Appointment created successfully");
      setBookAppointment(false);
      fetchAllAppointment();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleTimeSelect = (selectedTime) => {
    setInput((prev) => ({ ...prev, time: selectedTime }));
  };
  const handleClose = () => {
    setBookAppointment(false);
    setInput({
      patientId: "",
      doctorId: "",
      appointmentDate: "",
      time: "",
    });
  };
  // console.log("All Apppointment", allAppointment);
  return (
    <div>
      <Breadcrumbs />
      <div className="flex justify-between items-center p-3 rounded-md bg-white my-4">
        <div className="space-y-1">
          <h1 className="text-lg md:text-2xl font-bold">Appointments</h1>
          <p className="text-xs md:text-sm font-light text-stone-600">
            View, schedule, and manage patient appointments.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden relative w-full max-w-68 lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search appointment..."
            />
          </div>
          <button
            className="flex cursor-pointer items-center gap-2 rounded-md border border-stone-300 bg-[#004B8D] px-4 py-1 text-white transition-colors duration-200 hover:bg-[#0764b5]"
            onClick={() => setBookAppointment(true)}
          >
            <Plus size={18} />
            Create Appointment
          </button>
        </div>
      </div>
      <Table
        data={formattedAppointments}
        columns={appointmentColumns}
        loading={loading}
      />

      {/* delete dialog */}
      {deleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <DeletePopUp
            setDeleteDialog={setDeleteDialog}
            name={"John "}
            title="Delete Appointment?"
            onConfirm={handleAppointmentDelete}
          />
        </div>
      )}

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

            <form className="p-6" onSubmit={createAppointment}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Patient Select */}
                <div className="col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Patient
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    defaultValue=""
                    name="patientId"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select patient
                    </option>
                    {patientData.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.first_name} {patient.last_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Select */}
                <div className="col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Doctor
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    defaultValue=""
                    name="doctorId"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select doctor
                    </option>
                    {doctorData.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} - {doctor.specialization}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PROGRESSIVE UI: Only show Date & Time if Doctor is selected */}
                {input.doctorId && (
                  <>
                    <div className="col-span-2 border-t pt-4 mt-2">
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Select Date
                      </label>
                      <input
                        type="date"
                        className="w-full md:w-1/2 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        name="appointmentDate"
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]} // Prevents picking past dates
                      />
                    </div>

                    {/* Time Slot Grid (Only shows if Date is selected) */}
                    {input.appointmentDate && (
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
                                  input.time === slotTime
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
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={
                    !input.patientId ||
                    !input.doctorId ||
                    !input.appointmentDate ||
                    !input.time ||
                    loading
                  }
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {loading ? "Booking..." : "Confirm Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAppointment;
