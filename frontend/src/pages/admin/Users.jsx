import { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import { Eye, Search, SquarePen, Trash } from "lucide-react";
import api from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/common/BreadCrumbs";

const Users = () => {
  const [allUsers, setAllUsers] = useState(null || []);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  const filterUsers = allUsers.filter(
    (user) =>
      user?.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  
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
      render: (_, row) => (
        <span className="flex flex-col items-center md:flex-row gap-3">
          {/* <Link to={`/dashboard/users/${row.id}`}> */}
          <Eye
            color="#16a34a"
            size={24}
            className="cursor-pointer hover:scale-110"
            onClick={() => navigate(`/dashboard/users/${row.id}`)}
          />
          {/* </Link> */}

          <SquarePen
            color="#4b5563"
            size={20}
            className="cursor-pointer hover:scale-110"
          />

          <Trash
            color="#dc2626"
            size={20}
            className="cursor-pointer hover:scale-110"
          />
        </span>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-3 rounded-md bg-white mb-4">
        <div className="space-y-1">
          <Breadcrumbs />
          <h1 className="text-lg md:text-2xl font-bold">Users</h1>
          <p className="text-xs md:text-sm font-light text-stone-600">
            Search, filter, and manage all system users and their accounts.
          </p>
        </div>
        <div className="hidden relative w-full h-8 max-w-68 lg:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
            <Search className="w-4 h-4 text-stone-600" />
          </div>
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-full pl-10 pr-4 py-1 border text-sm border-stone-400 rounded-lg bg-gray-50 text-stone-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Users..."
          />
        </div>
      </div>
      <Table data={filterUsers} columns={userColumns} loading={loading} />
    </div>
  );
};

export default Users;
