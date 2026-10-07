import React from "react";
import UserProfileChart from "./UserProfileChart";
import Card from "../../common/Card";
import { ChartSpline, Heart, Thermometer, Wind } from "lucide-react";
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
const OverView = () => {
  return (
    <div className="mt-4">
      <div className=" grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cardItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <div className="mt-4 w-full h-[300px]">
        <UserProfileChart />
      </div>
    </div>
  );
};

export default OverView;
