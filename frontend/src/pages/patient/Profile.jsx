import React from "react";
import Table from "../../components/common/Table";
import { useUser } from "../../context/userContext";
import { useAuth } from "../../context/authContext";
import Breadcrumbs from "../../components/common/BreadCrumbs";
import { FileText, Mail, Phone, Shield, User } from "lucide-react";


const Profile = () => {
  const { profileData } = useUser();
  const { user } = useAuth();

  const medicalRecords = [
    {
      id: 1,
      DATE: "2026-09-10",
      TIME: "02:00 PM",
      DOCTOR: "Dr. Meredith Grey",
      DIAGNOSIS: "HeadAche",
      LABTEST: "PENDING",
    },
  ];
  const medicalRecordsColumn = [
    {
      key: "DATE",
      header: "DATE",
    },
    {
      key: "TIME",
      header: "TIME",
    },
    {
      key: "DOCTOR",
      header: "DOCTOR",
    },
    {
      key: "DIAGNOSIS",
      header: "DIAGNOSIS",
    },
    {
      key: "LABTEST",
      header: "LABTEST",
    },
  ];
  let loading = false;

  return (
    <>
      <Breadcrumbs />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div className="rounded-md border border-stone-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#004B8D] text-xl font-semibold text-white">
              {user?.username?.charAt(0).toUpperCase() || "U"}
            </div>

            <h2 className="mt-3 text-lg font-semibold text-stone-800">
              {user?.username || "Patient"}
            </h2>

            <p className="mt-1 flex items-center gap-2 text-sm text-stone-500">
              <Mail size={16} />
              {user?.email || "No email available"}
            </p>

            <span className="mt-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#004B8D]">
              Patient
            </span>
          </div>
        </div>
        {/* personal information */}
        <div className="border border-stone-200 p-4 rounded-md bg-white shadow-sm md:col-span-3">
          <div className="border-b-2 border-b-stone-300 pb-2">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <User aria-hidden="true" size={25} />
              <p>Personal Information</p>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            <div>
              <p className="text-xs text-stone-500">First Name</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Koshish
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Last Name</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Koshish
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500"> Medical Condition</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Good
              </p>
            </div>

            <div>
              <p className="text-xs text-stone-500">Date of Birth</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                21 Dec 2002
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Gender</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Male
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Phone</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                9843923686
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Marital Status</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Single
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Address</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Kathmandu
              </p>
            </div>
            {/* <div>
              <p className="text-xs text-stone-500">Email</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                koshish123@gmail.com
              </p>
            </div> */}
          </div>
        </div>
        {/* Emergency information */}
        <div className="border border-stone-200 p-4 rounded-md bg-white shadow-sm  md:col-span-2">
          <div className="border-b-2 border-b-stone-300 pb-2">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <Phone aria-hidden="true" size={25} />
              <p>Emergency Contact</p>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  pt-4">
            <div>
              <p className="text-xs text-stone-500">Name</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Balen Shah
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Relationship</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Guardian
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500"> Phone</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                9843023686
              </p>
            </div>
          </div>
        </div>
        {/* Insurance information */}
        <div className="border border-stone-200 p-4 rounded-md bg-white shadow-sm  md:col-span-2">
          <div className="border-b-2 border-b-stone-300 pb-2">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <Shield aria-hidden="true" size={25} />
              <p>Insurance Information</p>
            </h2>
          </div>
          <div className="grid grid-cols-2  pt-4">
            <div>
              <p className="text-xs text-stone-500">Provider</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                Sudan Insurance pvt ltd
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Provider Number</p>
              <p className="mt-1 break-all text-sm font-medium text-stone-800">
                789456123
              </p>
            </div>
          </div>
        </div>

        <div className="border border-stone-200 p-4 rounded-md bg-white shadow-sm col-span-4">
          <div className="border-b-2 border-b-stone-300 pb-2">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <FileText aria-hidden="true" size={25} />
              <p>Recent Medical Records</p>
            </h2>
          </div>
          {/* Table */}
          <Table
            data={medicalRecords}
            columns={medicalRecordsColumn}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
