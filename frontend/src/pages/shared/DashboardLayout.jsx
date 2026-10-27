import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import OnBoard from "../patient/OnBoard";
import { useUser } from "../../context/userContext";
import { useAuth } from "../../context/authContext";
import OnboardDoctor from "../doctor/OnboardDoctor";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profileData } = useUser();
  const { user } = useAuth();

  const onBordingRequired =
    user?.role === "PATIENT" && !profileData?.profile?.isOnboarded;

  const onBoardingDoctorRequired =
    user?.role === "DOCTOR" &&
    (!profileData?.profile?.workingDays ||
      profileData.profile.workingDays.length === 0);

  const renderContent = () => {
    if (onBordingRequired) {
      return <OnBoard />;
    }
    if (onBoardingDoctorRequired) {
      return <OnboardDoctor />;
    }
    return <Outlet />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="min-h-screen lg:ml-[260px]">
        {/* Navbar */}
        <Navbar setIsOpen={setIsOpen} />
        {/* Page Content */}
        <main className="min-w-0 p-4 sm:p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
