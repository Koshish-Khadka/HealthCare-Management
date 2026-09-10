import React from "react";

const OnBoard = () => {
  return (
    <div className="max-w-full border border-stone-300 rounded-md p-4 shadow-md">
      <div className="mb-4">
        <h1 className="text-xl font-bold">Patient Registration </h1>
        <p className="text-sm text-stone-600">
          Fill up the details below to register your detail.
        </p>
      </div>
      {/* Personal Information */}
      <form>
        <h2 className="text-lg font-medium mt-5">Personal Information</h2>
        <div className="grid mt-4 grid-cols-1 gap-4 md:grid-cols-2 ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>

            <input
              id="first_name"
              name="first_name"
              type="text"
              placeholder="First Name"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>

            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Last Name"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>

            <select
              id="Gender"
              name="Gender"
              type="text"
              placeholder="Last Name"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            >
              <option>Choose</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of Birth
            </label>

            <input
              id="dob"
              name="dob"
              type="date"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number
            </label>

            <input
              id="number"
              name="number"
              type="number"
              placeholder="Contact Number"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Marital Status
            </label>

            <select
              id="marital_status"
              name="marital_status"
              type="text"
              placeholder="Last Name"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            >
              <option>Select Marital Status</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>

            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your address"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <h2 className="text-lg font-medium mt-5 col-span-2">
            Family Information
          </h2>
          <div>
            <label
              htmlFor="emergencyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Emergency Contact Name
            </label>

            <input
              id="emergency_name"
              name="emergency_name"
              type="text"
              placeholder="Enter your Emergency contact name"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="emergencyNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Emergency Contact Number
            </label>

            <input
              id="emergency_number"
              name="emergency_number"
              type="number"
              placeholder="Enter your Emergency contact number"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="relation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Relation
            </label>

            <select
              id="relation"
              name="relation"
              type="text"
              placeholder="Last Name"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            >
              <option>Select relation</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Spouse</option>
              <option>Others</option>
            </select>
          </div>
          <h2 className="text-lg font-medium mt-5 col-span-2">
            Medical Information
          </h2>
          <div>
            <label
              htmlFor="bloodGroup"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Blood Group
            </label>
            <input
              id="blood_group"
              name="blood_group"
              type="text"
              placeholder="Enter your Blood Group"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="allergies"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Allergies
            </label>
            <input
              id="allergies"
              name="allergies"
              type="text"
              placeholder="Enter your Allergies"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="insuranceName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Insurance Provider
            </label>
            <input
              id="insurance_provider"
              name="insurance_provider"
              type="text"
              placeholder="Enter your Insurance Provider name"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="insuranceNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Insurance Number
            </label>
            <input
              id="insurance_number"
              name="insurance_number"
              type="number"
              placeholder="Enter your Insurance Provider number"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <h2 className="text-lg font-medium mt-5 col-span-2">Consent</h2>
          <div className="mt-4 flex gap-2 items-center space-x-2 col-span-2">
            <input
              type="checkbox"
              id="accept"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
            />
            <label htmlFor="accept">
              <p className="block text-base font-semibold text-gray-700 mb-1">
                Privacy Policy Agreement
              </p>
              <p className="text-sm font-normal text-stone-600 ">
                I consent to the collection, storage, and use of my personal and
                health information as outlined in the Privacy Policy. I
                understand how my data will be used, who it may be shared with,
                and my rights regarding access, correction, and deletion of my
                data.
              </p>
            </label>
          </div>
          <div className="mt-4 flex gap-2 items-center space-x-2 col-span-2">
            <input
              type="checkbox"
              id="accept"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
            />
            <label htmlFor="accept">
              <p className="block text-base font-semibold text-gray-700 mb-1">
                Terms of Service Agreement
              </p>
              <p className="text-sm font-normal text-stone-600 ">
                I agree to the Terms of Service, including my responsibilities
                as a user of this healthcare management system, the limitations
                of liability, and the dispute resolution process. I understand
                that continued use of this service is contingent upon my
                adherence to these terms.
              </p>
            </label>
          </div>
          <div className="mt-4 flex gap-2 items-center space-x-2 col-span-2">
            <input
              type="checkbox"
              id="accept"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
            />
            <label htmlFor="accept">
              <p className="block text-base font-semibold text-gray-700 mb-1">
                Informed Consent for Medical Treatment
              </p>
              <p className="text-sm font-normal text-stone-600 ">
                I provide informed consent to receive medical treatment and
                services through this healthcare management system. I
                acknowledge that I have been informed of the nature, risks,
                benefits, and alternatives to the proposed treatments and that I
                have the right to ask questions and receive further information
                before proceeding.
              </p>
            </label>
          </div>
        </div>
        {/* button  */}
        <div className="mt-8 flex justify-end items-end">
          <button className="px-3 py-1 border border-stone-300 rounded-md bg-[#004B8D] text-white transition-colors duration-200 ease-in-out hover:bg-[#0764b5] cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnBoard;
