import "chart.js/auto";
import { Line } from "react-chartjs-2";
const UserProfileChart = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Active Users",
        data: [400, 1000, 2100, 3400],
        borderColor: "#3b82f6",
        tension: 0.2,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="w-full h-full border p-3 rounded-md border-stone-300 shadow-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default UserProfileChart;
