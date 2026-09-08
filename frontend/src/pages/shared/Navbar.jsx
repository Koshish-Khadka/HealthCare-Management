import { LogOutIcon, Menu, Search, Settings } from "lucide-react";
import { useState } from "react";
const Navbar = ({ setIsOpen }) => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-stone-200  bg-white">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        {/* Hamburger menu for the mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="hidden relative w-full max-w-68 lg:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
            <Search className="w-4 h-4 text-slate-500" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search anything.."
          />
        </div>
        <div className="relative">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004B8D]"
            onClick={() => setMenu(!menu)}
          >
            <p className="text-white text-sm font-semibold">K</p>
          </div>
          {/* dropdown */}
          {menu && (
            <div className="max-w-84 absolute right-8 border border-stone-200 shadow-xl px-4 py-2 rounded-md bg-white ">
              <div className="border-b border-stone-200 py-2">
                <p className="text-sm font-medium text-stone-600">
                  Koshish Khadka
                </p>
                <p className="text-[12px] font-light text-stone-400">
                  koshish2003@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2 border-b border-stone-200 py-2 hover:bg-slate-100 cursor-pointer">
                <Settings className="w-5 h-5 text-stone-600" />
                <p className="text-sm font-medium text-stone-600">Settings</p>
              </div>
              <div className="flex items-center gap-2 py-2 hover:bg-slate-100 cursor-pointer">
                <LogOutIcon className="w-5 h-5 text-stone-600" />
                <p className="text-sm font-medium text-stone-600">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
