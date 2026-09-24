import { X } from "lucide-react";
import React from "react";

const AddDoctor = ({ onClose }) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-stone-300 pb-2">
        <div>
          <h1 className="text-xl font-bold">Add doctor</h1>
          <p className="text-base text-stone-400 font-light">
            Register a new Doctor.
          </p>
        </div>
        <div onClick={() => onClose()} className="cursor-pointer">
          <X />
        </div>
      </div>
      {/* doctor form */}
      <div className="mt-4">
        <form action="" className="grid grid-cols-1 gap-4 p-2 lg:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              UserName
            </label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
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
              className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Specilization
            </label>

            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Last Name"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              License Number
            </label>

            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Last Name"
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
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Department
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
          <div className="col-span-2 mt-4 w-full h-12">
            <button className="w-full h-full px-3 py-1 border border-stone-300 rounded-md bg-[#004B8D] text-white transition-colors duration-200 ease-in-out hover:bg-[#0764b5] cursor-pointer">
              Create Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
