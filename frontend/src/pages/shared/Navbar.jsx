import { Search } from "lucide-react";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-stone-200  bg-white">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        <div className="relative w-full max-w-68">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
            <Search className="w-4 h-4 text-slate-500" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search anything.."
          />
        </div>

        <div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004B8D]">
            <p className="text-white text-sm font-semibold">K</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
