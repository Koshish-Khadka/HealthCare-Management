import { useState } from "react";
import Table from "../../components/common/Table";
import { Eye, Search, SquarePen, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { usePatient } from "../../context/patientContent";
import Breadcrumbs from "../../components/common/BreadCrumbs";
import DeletePopUp from "../../components/common/DeletePopUp";
import EditPopUp from "../../components/common/EditPopUp";

const Patient = () => {
  const { patientData, loading } = usePatient();
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);
  // console.log(patientData);
  // search feature
  const searchResult = patientData.filter((patient) =>
    patient?.first_name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const patientColumns = [
    {
      key: "id",
      header: "id",
      render: (_, row, index) => index + 1,
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
      render: (_, row) => (
        <span className="flex flex-col items-center md:flex-row gap-3">
          <Link to={`/dashboard/patients/${row.id}`}>
            <Eye
              color="#16a34a"
              size={24}
              className="cursor-pointer hover:scale-110"
            />
          </Link>

          <SquarePen
            color="#4b5563"
            size={20}
            className="cursor-pointer hover:scale-110"
            onClick={() => handleEdit(row)}
          />

          <Trash
            color="#dc2626"
            size={20}
            className="cursor-pointer hover:scale-110"
            onClick={() => setDeleteDialog(true)}
          />
        </span>
      ),
    },
  ];

  const patientFields = [
    {
      name: "first_name",
      label: "First Name",
      editable: true,
      required: true,
    },
    {
      name: "last_name",
      label: "Last Name",
      editable: true,
      required: true,
    },
    {
      name: "date_of_birth",
      label: "Date of Birth",
      editable: false,
    },
    {
      name: "gender",
      label: "Gender",
      editable: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      editable: false,
    },
    {
      name: "marital_status",
      label: "Marital Status",
      editable: false,
    },
    {
      name: "address",
      label: "Address",
      editable: false,
    },

    {
      name: "emergency_contact_name",
      label: "Emergency Contact Name",
      editable: false,
    },
    {
      name: "emergency_contact_number",
      label: "Emergency Contact Number",
      editable: false,
    },
    {
      name: "relation",
      label: "Relation",
      editable: false,
    },
    {
      name: "blood_group",
      label: "Blood Group",
      editable: false,
    },
    {
      name: "allergies",
      label: "Allergies",
      editable: false,
    },
    {
      name: "createdAt",
      label: "Joined At",
      editable: false,
      type: "date",
    },
  ];
  const handleEdit = (user) => {
    setSelectedPatient(user);
    setEditDialog(true);
  };

  const handleDeleteDoctor = () => {
    alert("Patient deleted");
  };
  const handleSavePatient = () => {
    alert("Saved");
  };

  return (
    <div>
      <div className="flex justify-between items-center p-3 rounded-md bg-white mb-4">
        <div className="space-y-1">
          <Breadcrumbs />
          <h1 className="text-lg md:text-2xl font-bold">Patients</h1>
          <p className="text-xs md:text-sm font-light text-stone-600">
            Search, filter, and manage patient records and admissions.
          </p>
        </div>
        <div>
          <div className="hidden relative w-full max-w-68 lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Patients..."
            />
          </div>
        </div>
      </div>
      <Table data={searchResult} columns={patientColumns} loading={loading} />

      {deleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <DeletePopUp
            setDeleteDialog={setDeleteDialog}
            name={"Peater parker"}
            title="Delete Patient?"
            onConfirm={handleDeleteDoctor}
          />
        </div>
      )}

      {editDialog && selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <EditPopUp
            setEditDialog={setEditDialog}
            title="Edit Patient"
            subtitle="View patient details and update account status"
            data={selectedPatient}
            fields={patientFields}
            onSave={handleSavePatient}
          />
        </div>
      )}
    </div>
  );
};

export default Patient;
