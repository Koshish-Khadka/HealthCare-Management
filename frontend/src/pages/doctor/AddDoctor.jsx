import { X } from "lucide-react";
import { useState } from "react";
import api from "../../lib/axios";
import { ClipLoader } from "react-spinners";

const AddDoctor = ({ onClose }) => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    specialization: "",
    license_number: "",
    phone: "",
    address: "",
    department: "",
    job_type: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const addDoctorHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post("/doctors/createDoctor", input);
      console.log(response.data);
      alert("Doctor added sucessfully");
      onClose();
    } catch (error) {
      console.log("Failed to add Doctor", error);
    } finally {
      setLoading(false);
    }
  };
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
        <form
          onSubmit={addDoctorHandler}
          className="grid grid-cols-1 gap-4 p-2 lg:grid-cols-2"
        >
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
              onChange={handleInputChange}
              placeholder="Enter your username"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
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
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
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
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
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
              id="specialization"
              name="specialization"
              type="text"
              onChange={handleInputChange}
              placeholder="Doctor specialization"
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
              id="license_number"
              name="license_number"
              type="text"
              onChange={handleInputChange}
              placeholder="Doctor license number"
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
              id="phone"
              name="phone"
              type="number"
              onChange={handleInputChange}
              placeholder="Contact Number"
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            />
          </div>
          <div>
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
              onChange={handleInputChange}
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
              id="department"
              name="department"
              type="text"
              placeholder="Select Department"
              onChange={handleInputChange}
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            >
              <option>Select Department</option>
              <option value="Cardiology">Cardiology </option>
              <option value="Neurology">Neurology</option>
              <option value="Gastroenterology">Gastroenterology </option>
              <option value="General Surgery">General Surgery</option>
              <option value="Oncology">Oncology </option>
              <option value="Orthopedics">Orthopedics </option>
              <option value="ENT">ENT </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Department
            </label>

            <select
              id="job_type"
              name="job_type"
              type="text"
              placeholder="Select job type"
              onChange={handleInputChange}
              className="w-full h-8 px-3 border border-gray-300 rounded-md text-sm outline-none transition focus:border-[#004B8D] focus:ring-2 focus:ring-[#004B8D]/20"
            >
              <option>Select Job Type</option>
              <option value="FULL_TIME">Full Time </option>
              <option value="PART_TIME"> Part Time</option>
              <option value="CONTRACT"> Contract </option>
            </select>
          </div>
          <div className="col-span-2 mt-4 w-full h-10">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-full px-3 py-1 border flex justify-center items-center border-stone-300 rounded-md bg-[#004B8D] text-white transition-colors duration-200 ease-in-out hover:bg-[#0764b5] cursor-pointer"
            >
              {loading ? <ClipLoader color="white" /> : <p>Create Doctor</p>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
