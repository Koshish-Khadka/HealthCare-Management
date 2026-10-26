import Badge from "../ui/Badge";

const AvailableDoctor = ({ loading, availableDoctors }) => {
  if (loading) {
    return <p>Loading content ...</p>;
  }
  return (
    <div className="border h-full border-stone-300 rounded-md p-3">
      <h1 className="text-lg font-medium">Available doctors</h1>
      {availableDoctors.slice(0, 6).map((data) => (
        <div
          className="flex items-center justify-between mt-2 px-3 py-2 rounded-md"
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
          <div className="cursor-pointer">
            <Badge varient={"Brand"} text={"See Detail"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableDoctor;
