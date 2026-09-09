const AvailableDoctor = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Alexander Fleming",
      department: "Immunology",
    },
    {
      id: 2,
      name: "Dr. Meredith Grey",
      department: "General Surgery",
    },
    {
      id: 3,
      name: "Dr. Gregory House",
      department: "Diagnostic Medicine",
    },
    {
      id: 4,
      name: "Dr. Charles Xavier",
      department: "Neurology",
    },
    {
      id: 5,
      name: "Dr. Strange",
      department: "Neurosurgeon",
    },
    {
      id: 6,
      name: "Dr. Koshish",
      department: "Neurosurgeon",
    },
    {
      id: 7,
      name: "Dr. Koshish",
      department: "Neurosurgeon",
    },
    {
      id: 8,
      name: "Dr. Koshish",
      department: "Neurosurgeon",
    },
  ];
  return (
    <div className="border h-full border-stone-300 rounded-md p-3">
      <h1 className="text-lg font-medium">Available doctors</h1>
      {doctors.slice(0, 6).map((data) => (
        <div
          className="flex items-center justify-between mt-2 border border-stone-300 px-3 py-2 rounded-md"
          key={data.id}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#004B8D]">
              <p className="text-white text-sm font-semibold">K</p>
            </div>
            <div>
              <p className="text-sm">{data.name}</p>
              <p className="text-[12px] font-light text-stone-400">
                {data.department}
              </p>
            </div>
          </div>
          <span className="border border-stone-300 shadow-2xl px-2  rounded-3xl text-[12px]">
            See Detail
          </span>
        </div>
      ))}
    </div>
  );
};

export default AvailableDoctor;
