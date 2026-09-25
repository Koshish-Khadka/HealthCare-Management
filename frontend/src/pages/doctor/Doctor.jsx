import { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import { Eye, Plus, Search, SquarePen, Trash } from "lucide-react";
import AddDoctor from "../doctor/AddDoctor";
import api from "../../lib/axios";
const Doctor = () => {
  const [addDoctorOpen, setAddDoctorOpen] = useState(false);
  const [allDoctors, setALLDoctors] = useState(null || []);

  // console.log("All doctor details", allDoctors);

  const [loading, setLoading] = useState(false);

  const fetchALLDoctors = async () => {
    setLoading(true);
    try {
      const response = await api.get("/doctors/allDoctors");
      setALLDoctors(response.data.doctors);
    } catch (error) {
      console.log("Failed to fetch doctor ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchALLDoctors();
  }, []);

  const doctorColumns = [
    {
      key: "id",
      header: "id",
    },
    {
      key: "name",
      header: "name",
    },
    {
      key: "email",
      header: "email",
      width: "1.5fr",
    },
    {
      key: "specialization",
      header: "specialization",
      width: "1.5fr",
    },

    {
      key: "department",
      header: "department",
    },
    {
      key: "availability_status",
      header: "availability",
      width: "1.5fr",
      render: (value) => (
        <span
          className={value === "ACTIVE" ? "text-green-600" : "text-red-600"}
        >
          {value}
        </span>
      ),
    },
    {
      key: "action",
      header: "action",
      render: () => (
        <span className="flex flex-col items-center md:flex-row gap-3 cursor-pointer ">
          <Eye color="#16a34a" size={24} className="hover:scale-110" />
          <SquarePen color="#4b5563" size={20} className="hover:scale-110" />
          <Trash color="#dc2626" size={20} className="hover:scale-110" />
        </span>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-3 rounded-md bg-white">
        <p className="text-2xl font-bold">
          {allDoctors.length || 0}{" "}
          <span className="text-lg font-light">Doctors</span>
        </p>
        <div className="flex items-center gap-4">
          <div className="hidden relative w-full max-w-68 lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Doctors..."
            />
          </div>
          <button
            className="flex cursor-pointer items-center gap-2 rounded-md border border-stone-300 bg-[#004B8D] px-4 py-1 text-white transition-colors duration-200 hover:bg-[#0764b5]"
            onClick={() => setAddDoctorOpen(true)}
          >
            <Plus size={18} />
            Add Doctor
          </button>
        </div>
      </div>

      <div className="flex items-end justify-end"></div>

      <div>
        <Table data={allDoctors} columns={doctorColumns} loading={loading} />
      </div>

      {/* Overlay */}
      {addDoctorOpen && (
        <div
          onClick={() => setAddDoctorOpen(false)}
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
        />
      )}

      {/* Right Drawer */}
      <div
        className={`
        fixed right-0 top-0 z-[60]
        h-screen w-full sm:w-[500px] lg:w-[600px]
        bg-stone-100 shadow-xl
        transition-transform duration-300 ease-in-out
        ${addDoctorOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}

        {/* Content */}
        {/* <div className="h-[calc(100vh-65px)] overflow-y-auto p-4">
        This is add doctor window
      </div> */}
        <div className="h-[calc(100vh-65px)] overflow-y-auto p-4">
          <AddDoctor onClose={() => setAddDoctorOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Doctor;
