import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import { EllipsisVertical, Eye, Search, SquarePen, Trash } from "lucide-react";
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
          {allUsers.length || 0}{" "}
          <span className="text-lg font-light">Users</span>
        </p>
        <div>
          <div className="hidden relative w-full max-w-68 lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Users..."
            />
          </div>
        </div>
      </div>
      <Table data={allUsers} columns={userColumns} loading={loading} />
    </div>
  );
};

export default Users;
