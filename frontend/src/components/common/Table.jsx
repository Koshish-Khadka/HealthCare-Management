import React from "react";

const Table = () => {
  const EMPLOYEES = [
    {
      id: 1,
      name: "Jane Cooper",
      email: "jane.c@example.com",
      role: "Regional Director",
      status: "Active",
    },
    {
      id: 2,
      name: "Cody Fisher",
      email: "cody.f@example.com",
      role: "Product Manager",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Esther Howard",
      email: "esther.h@example.com",
      role: "Forward Developer",
      status: "Inactive",
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto p-4 text-sm text-gray-600">
      {/* <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"> */}
      {/* TABLE HEADER: Hidden on mobile, shown as a grid row on desktop */}
      <div className="hidden md:grid grid-cols-4 bg-gray-50 text-xs uppercase tracking-wider font-semibold text-gray-700 border-b border-gray-200 px-6 py-4">
        <div>User</div>
        <div>Role</div>
        <div>Status</div>
        <div className="text-right">Actions</div>
      </div>

      {/* TABLE ROWS: Flex-column on mobile, Grid-row on desktop */}
      <div className="divide-y divide-gray-200">
        {EMPLOYEES.map((employee) => (
          <div
            key={employee.id}
            className="flex flex-col gap-3 p-4 md:grid md:grid-cols-4 md:items-center md:gap-0 md:px-6 md:py-4 bg-white even:bg-gray-50/30 hover:bg-slate-50 transition-colors"
          >
            {/* Column 1: User Info */}
            <div className="flex flex-col">
              <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                User
              </span>
              <span className="font-semibold text-gray-900 md:font-medium">
                {employee.name}
              </span>
              <span className="text-xs text-gray-400">{employee.email}</span>
            </div>

            {/* Column 2: Role */}
            <div className="flex flex-col md:block">
              <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                Role
              </span>
              <span className="font-medium text-gray-700 md:font-normal">
                {employee.role}
              </span>
            </div>

            <div className="flex flex-col items-start md:block">
              <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                Status
              </span>
              <span
                className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                  employee.status === "Active"
                    ? "bg-green-50 text-green-700 ring-green-600/20"
                    : employee.status === "Inactive"
                      ? "bg-red-50 text-red-700 ring-red-600/20"
                      : "bg-yellow-50 text-yellow-700 ring-yellow-600/20"
                }`}
              >
                {employee.status}
              </span>
            </div>
            <div className="flex justify-end pt-2 border-t border-gray-100 md:pt-0 md:border-none md:block md:text-right">
              <button className="text-indigo-600 hover:text-indigo-900 font-semibold cursor-pointer">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Table;
