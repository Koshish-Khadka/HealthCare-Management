import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../lib/axios";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import UserProfile from "../../components/layout/userDetail/UserProfile";
import TabList from "../../components/layout/userDetail/TabList";
import { useState } from "react";
import OverView from "../../components/layout/userDetail/OverView";
import MedicalHistory from "../../components/layout/userDetail/MedicalHistory";
import Appointment from "../../components/layout/userDetail/Appointment";
const UserDetailPage = () => {
  const { userId } = useParams();
  const [selectedTab, setSelectedTab] = useState("Overview");

  const fetchUserDetail = async () => {
    try {
      const response = await api.get(`/admin/users/${userId}`);
      console.log("User detail:", response.data);
    } catch (error) {
      console.log("Failed to fetch user:", error);
    }
  };

  useEffect(() => {
    if (!userId) return;
    fetchUserDetail();
  }, [userId]);

  const renderContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <OverView />;
      case "Medical History":
        return <MedicalHistory />;
      case "Appointments":
        return <Appointment />;
      case "Billing":
        return <p>Billing</p>;
      case "Documents":
        return <p>Documents.</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex ">
        <BreadCrumbs />
      </div>
      <div>
        <UserProfile />
      </div>
      {/* content */}

      <div>
        <TabList setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        {/* content */}
        {renderContent()}
      </div>

    </div>
  );
};

export default UserDetailPage;
