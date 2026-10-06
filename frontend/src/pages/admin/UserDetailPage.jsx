import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../lib/axios";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import UserProfile from "../../components/layout/UserProfile";
import TabList from "../../components/layout/TabList";
import Card from "../../components/common/Card";
import { ChartSpline, Heart, Thermometer, Wind } from "lucide-react";
import UserProfileChart from "../../components/layout/UserProfileChart";
import { useState } from "react";
const UserDetailPage = () => {
  const { userId } = useParams();
  const [selectedTab, setSelectedTab] = useState("Overview");


  const fetchUserDetail = async () => {
    try {
      console.log("Fetching user:", userId);
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

  const cardItems = [
    {
      id: 1,
      title: "Heart Rate",
      number: "66bpm",
      icon: Heart,
      subTitle: "Normal 60–100 bpm",
    },
    {
      id: 2,
      title: "Blood Pressure",
      number: "125/74mmHg",
      icon: ChartSpline,
      subTitle: "Normal 90–120/60–80 mmHg",
    },
    {
      id: 3,
      title: "SpO₂",
      number: "97%",
      icon: Wind,
      subTitle: "Normal 95–100%",
    },
    {
      id: 5,
      title: "Temperature",
      number: " 37.0°C",
      icon: Thermometer,
      subTitle: "Normal 36.1–37.2°C",
    },
  ];

  return (
    <div>
      <div className="flex ">
        <BreadCrumbs />
      </div>
      {/* content */}
      <div>
        <UserProfile />
      </div>
      {/*  */}
      <div>
        <TabList setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        {/* content */}
        <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cardItems.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <UserProfileChart />
      </div>
    </div>
  );
};

export default UserDetailPage;
