import { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import { Eye, Plus, SquarePen, Trash } from "lucide-react";
import AddDoctor from "../doctor/AddDoctor";
import api from "../../lib/axios";
const Doctor = () => {
  const [addDoctorOpen, setAddDoctorOpen] = useState(false);
  const [allDoctors, setALLDoctors] = useState(null || []);

  console.log("All doctor details", allDoctors);

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

  if (loading)
    return (
      <p className="h-screen flex justify-center items-center">Loading.....</p>
    );

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
          <Eye color="#16a34a" size={24} />
          <SquarePen color="#4b5563" size={20} />
          <Trash color="#dc2626" size={20} />
        </span>
      ),
    },
  ];
  return (
    <div>
      <div className="flex items-end justify-end">
        <button
          className="flex cursor-pointer items-center gap-2 rounded-md border border-stone-300 bg-[#004B8D] px-4 py-2 text-white transition-colors duration-200 hover:bg-[#0764b5]"
          onClick={() => setAddDoctorOpen(true)}
        >
          <Plus size={18} />
          Add Doctor
        </button>
      </div>

      <div>
        <Table data={allDoctors} columns={doctorColumns} />
      </div>

      {/* Overlay */}
      {addDoctorOpen && (
        <div
          onClick={() => setAddDoctorOpen(false)}
          className="fixed inset-0 z-25 backdrop-blur-sm"
        />
      )}

      {/* Right Drawer */}
      <div
        className={`
        fixed right-0 top-0 z-25
        h-screen w-full sm:w-[500px] lg:w-[600px]
        bg-stone-100 shadow-xl
        transition-transform duration-300 ease-in-out
        ${addDoctorOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-300 p-4">
          <h2 className="text-lg font-semibold">Add Doctor</h2>

          <button
            onClick={() => setAddDoctorOpen(false)}
            className="cursor-pointer text-xl text-stone-500 hover:text-stone-800"
          >
            ×
          </button>
        </div>

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
