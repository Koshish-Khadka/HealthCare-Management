import React from "react";
import Table from "../../components/common/Table";
import { EllipsisVertical, Eye, SquarePen, Trash } from "lucide-react";

const Users = () => {
  const users = [
    {
      id: 1,
      username: "alice_jones",
      email: "alice.jones@example.com",
      role: "Admin",
      joinDate: "2024-03-15",
      status: "INACTIVE",
    },
    {
      id: 2,
      username: "bob_smith",
      email: "bob.smith@example.com",
      role: "Doctor",
      joinDate: "2025-01-10",
      status: "INACTIVE",
    },
    {
      id: 3,
      username: "charlie_brown",
      email: "charlie.b@example.com",
      role: "Patient",
      joinDate: "2025-06-22",
      status: "ACTIVE",
    },
    {
      id: 4,
      username: "diana_prince",
      email: "diana.p@example.com",
      role: "Doctor",
      joinDate: "2025-11-05",
      status: "ACTIVE",
    },
    {
      id: 5,
      username: "ethan_hunt",
      email: "ethan.hunt@example.com",
      role: "Receptionist",
      joinDate: "2026-02-18",
      status: "ACTIVE",
    },
  ];
  const userColumns = [
    {
      key: "username",
      header: "username",
    },
    {
      key: "email",
      header: "email",
    },
    {
      key: "joinDate",
      header: "joinDate",
    },
    {
      key: "role",
      header: "role",
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
      <Table data={users} columns={userColumns} />
    </div>
  );
};

export default Users;
