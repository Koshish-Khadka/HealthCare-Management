import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import api from "../../lib/axios";
import { Eye, Search, SquarePen, Trash } from "lucide-react";

const Patient = () => {
  const [patients, setPatients] = useState(null || []);
  const [loading, setLoading] = useState(false);
  const patientColumns = [
    {
      key: "id",
      header: "id",
    },
    {
      key: "first_name",
      header: "first name",
    },
    {
      key: "last_name",
      header: "last name",
    },
    {
      key: "gender",
      header: "gender",
      // width: "1.5fr",
    },
    {
      key: "phone",
      header: "phone",
      width: "1.5fr",
    },

    {
      key: "address",
      header: "address",
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

  const fetchAllPatient = async () => {
    try {
      setLoading(true);
      const response = await api.get("/patients/allPatients");
      setPatients(response.data.patients);
    } catch (error) {
      console.log("Failed to fetch all patients", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPatient();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center p-3 rounded-md bg-white">
        <p className="text-2xl font-bold">
          {patients.length || 0}{" "}
          <span className="text-lg font-light">Patients</span>
        </p>
        <div>
          <div className="hidden relative w-full max-w-68 lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Patients..."
            />
          </div>
        </div>
      </div>
      <Table data={patients} columns={patientColumns} loading={loading} />
    </div>
  );
};

export default Patient;
