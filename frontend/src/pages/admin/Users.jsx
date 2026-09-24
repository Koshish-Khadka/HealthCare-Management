import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import { EllipsisVertical, Eye, SquarePen, Trash } from "lucide-react";
import api from "../../lib/axios";

const Users = () => {
  const [allUsers, setAllUsers] = useState(null || []);
  const [loading, setLoading] = useState(false);

  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get("/admin/users");
      setAllUsers(response.data.users);
    } catch (error) {
      console.log("Failed to fetch all users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  // console.log("All users", allUsers);
  const userColumns = [
    {
      key: "username",
      header: "username",
    },
    {
      key: "email",
      header: "email",
      width: "1.2fr",
    },

    {
      key: "role",
      header: "role",
    },
    {
      key: "createdAt",
      header: "joinDate",
      render: (value) => <span>{value.split("T")[0]}</span>,
    },
    {
      key: "status",
      header: "status",
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
      render: (value) => (
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
      <Table data={allUsers} columns={userColumns} loading={loading} />
    </div>
  );
};

export default Users;
