import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen lg:ml-[260px]">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="min-w-0 p-4 sm:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;