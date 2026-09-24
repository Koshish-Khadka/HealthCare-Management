import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import api from "../../lib/axios";
import { Eye, SquarePen, Trash } from "lucide-react";

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
          <Eye color="#16a34a" size={24} />
          <SquarePen color="#4b5563" size={20} />
          <Trash color="#dc2626" size={20} />
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
      <Table data={patients} columns={patientColumns} loading={loading} />
    </div>
  );
};

export default Patient;
