import { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import { Eye, Search, SquarePen, Trash } from "lucide-react";
import api from "../../lib/axios";
import Breadcrumbs from "../../components/common/BreadCrumbs";
import ProfileCircle from "../../components/common/ProfileCircle";
import DeletePopUp from "../../components/common/DeletePopUp";
import EditPopUp from "../../components/common/EditPopUp";
import Switch from "../../components/ui/Switch";

const Users = () => {
  const [allUsers, setAllUsers] = useState(null || []);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const tabs = ["All", "Active", "InActive"];
  const selectedTab = "All";

  const userColumns = [
    {
      key: "username",
      header: "username",
      render: (value) => (
        <div className="flex items-center gap-1.5">
          <ProfileCircle username={value.charAt(0)} />
          <p>{value}</p>
        </div>
      ),
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
        <div>
          <Switch value={value} />
        </div>
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
            size={18}
            className="cursor-pointer hover:scale-110"
            onClick={() => handleEdit(row)}
          />
        </span>
      ),
    },
  ];

  const userFields = [
    {
      name: "username",
      label: "Username",
      editable: true,
      required: true,
    },
    {
      name: "email",
      label: "Email",
      editable: false,
    },
    {
      name: "createdAt",
      label: "Joined At",
      editable: false,
      type: "date",
    },
    {
      name: "role",
      label: "Role",
      editable: false,
    },
    {
      name: "status",
      label: "Account Status",
      editable: false,
      type: "select",
      fullWidth: true,
      options: [
        { label: "Active", value: "ACTIVE" },
        { label: "Inactive", value: "INACTIVE" },
      ],
    },
  ];

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

  // console.log("All user data", allUsers);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const filterUsers = allUsers.filter((user) =>
    user?.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDeleteDoctor = () => {
    alert("Doctor deleted");
  };

  const handleSaveUser = () => {
    alert("Saved");
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditDialog(true);
  };

  //   const handleSaveUser = async (formData) => {
  //   try {
  //     const response = await api.patch(`/admin/users/${formData.id}`, {
  //       username: formData.username,
  //       status: formData.status,
  //     });

  //     const updatedUser = response.data.user;

  //     setAllUsers((prevUsers) =>
  //       prevUsers.map((user) =>
  //         user.id === updatedUser.id ? updatedUser : user,
  //       ),
  //     );

  //     setSelectedUser(updatedUser);
  //   } catch (error) {
  //     console.error("Failed to update user:", error);
  //     throw error;
  //   }
  // };

  return (
    <div>
      <Breadcrumbs />
      <div className="flex justify-between items-center p-3 rounded-md bg-white my-4 ">
        <div className="space-y-1">
          <h1 className="text-lg md:text-2xl font-bold">Users</h1>
          <p className="text-xs md:text-sm font-light text-stone-600">
            Search, filter, and manage all system users and their accounts.
          </p>
          <div className="flex gap-1 border border-stone-100 bg-stone-100  w-fit rounded-lg px-2 py-1">
            {tabs.map((item) => (
              <button
                key={item}
                className={`text-xs p-1 rounded-lg text-black ${selectedTab === item ? "font-semibold bg-white" : "font-normal "} `}
              >
                {item}
              </button>
            ))}
          </div>
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
      {deleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <DeletePopUp
            setDeleteDialog={setDeleteDialog}
            name={"Koshish Khadka"}
            title="Delete doctor?"
            onConfirm={handleDeleteDoctor}
          />
        </div>
      )}
      {editDialog && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <EditPopUp
            setEditDialog={setEditDialog}
            title="Edit User"
            subtitle="View user details and update account status"
            data={selectedUser}
            fields={userFields}
            onSave={handleSaveUser}
          />
        </div>
      )}
    </div>
  );
};

export default Users;
