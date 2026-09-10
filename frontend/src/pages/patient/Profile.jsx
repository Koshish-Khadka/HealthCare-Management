import React from "react";
import Table from "../../components/common/Table";

const Profile = () => {
  const patientData = {
    first_name: "John",
    last_name: "Doe",
    date_of_birth: "1994-05-15",
    gender: "MALE",
    phone: "+1-555-0199",
    email: "john.doe@example.com",
    marital_status: "Single",
    address: "123 Health Science Way, Suite 400, New York, NY 10001",
    emergency_contact_name: "Jane Doe",
    emergency_contact_number: "+1-555-0144",
    relation: "Spouse",
    blood_group: "O-Positive",
    allergies: "Penicillin, Peanuts",
    medical_conditions: "Mild Seasonal Asthma",
    medical_history: "Appendectomy in 2018",
    insurance_provider: "Blue Cross Blue Shield",
    insurance_number: "XYZ-987654321",
  };

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
      // render: (value) => (
      //   <span
      //     className={value === "ACTIVE" ? "text-green-600" : "text-red-600"}
      //   >
      //     {value}
      //   </span>
      // ),
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border border-stone-300 p-3 rounded-md shadow-md md:col-span-1 ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#004B8D]">
              <p className="text-white text-sm font-semibold">K</p>
            </div>
            <div className="space-y-2 text-center mt-2">
              <p className="text-xl font-semibold text-stone-800">
                Koshish Khadka
              </p>
              <p className="text-xs font-light text-stone-400">
                koshish2003@gmail.com
              </p>
              <p className="text-lg font-semibold text-stone-800">0</p>
              <p className="text-sm font-semibold">Appointments</p>
            </div>
          </div>
        </div>
        <div className="border border-stone-300 p-4 rounded-md shadow-md md:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs text-stone-500">First Name</p>
              <p className="font-medium text-base">{patientData.first_name}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Last Name</p>
              <p className="font-medium text-base">{patientData.last_name}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Date of Birth</p>
              <p className="font-medium text-base">
                {patientData.date_of_birth}
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Gender</p>
              <p className="font-medium text-base">{patientData.gender}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Phone</p>
              <p className="font-medium text-base">{patientData.phone}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Email</p>
              <p className="font-medium text-base">{patientData.email}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Marital Status</p>
              <p className="font-medium text-base">
                {patientData.marital_status}
              </p>
            </div>{" "}
            <div>
              <p className="text-xs text-stone-500">Emergency Contact Name</p>
              <p className="font-medium text-base">
                {patientData.emergency_contact_name}
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Emergency Contact Number</p>
              <p className="font-medium text-base">
                {patientData.emergency_contact_number}
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Blood Group</p>
              <p className="font-medium text-base">{patientData.blood_group}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Insurance Provider</p>
              <p className="font-medium text-base">
                {patientData.insurance_provider}
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-500">Insurance Number</p>
              <p className="font-medium text-base">
                {patientData.insurance_number}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* medical records */}
      <div className=" mt-4 border border-stone-300 rounded-md shadow-md p-3">
        <div className="space-y-1">
          <h2 className="text-xl text-stone-900 font-medium">
            Medical Records{" "}
          </h2>
          <p className="text-[12px] md:text-sm font-light text-stone-600">
            This tables shows medical Records
          </p>
        </div>

        <Table columns={medicalRecordsColumn} data={medicalRecords} />
        {/* </div> */}
      </div>
    </>
  );
};

export default Profile;
