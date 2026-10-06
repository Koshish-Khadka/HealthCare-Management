

const TabList = ({ setSelectedTab, selectedTab }) => {
  const tabs = [
    "Overview",
    "Medical History",
    "Appointments",
    "Billing",
    "Documents",
  ];
  return (
    <div className="mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none   ${selectedTab === tab ? "bg-[#004B8D] text-white focus:ring-2 focus:ring-blue-500" : ""}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabList;
