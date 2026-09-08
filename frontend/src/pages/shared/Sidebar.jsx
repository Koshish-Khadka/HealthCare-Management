import React from "react";
import {
  LayoutDashboard,
  Users,
  UserRound,
  User,
  ListOrdered,
  Bell,
  Settings,
  FileText,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const allRoles = ["ADMIN", "DOCTOR", "PATIENT"];
  let role = "ADMIN";

  const SIDEBAR_LINKS = [
    {
      label: "MENU",
      links: [
        {
          name: "Dashboard",
          to: "/dashboard",
          access: allRoles,
          icon: LayoutDashboard,
        },
      ],
    },

    {
      label: "MANAGE",
      links: [
        {
          name: "Users",
          to: "/dashboard/users",
          access: ["ADMIN"],
          icon: Users,
        },
        {
          name: "Doctors",
          to: "/dashboard/doctors",
          access: ["ADMIN"],
          icon: UserRound,
        },
        {
          name: "Patients",
          to: "/dashboard/patients",
          access: ["ADMIN", "DOCTOR"],
          icon: User,
        },
        {
          name: "Appointments",
          to: "/dashboard/appointments",
          access: ["ADMIN", "PATIENT", "DOCTOR"],
          icon: ListOrdered,
        },
        {
          name: "Medical Records",
          to: "/dashboard/medical-records",
          access: ["ADMIN", "DOCTOR"],
          icon: FileText,
        },
      ],
    },

    {
      label: "SYSTEM",
      links: [
        {
          name: "Notifications",
          to: "/dashboard/notifications",
          access: allRoles,
          icon: Bell,
        },
        {
          name: "Settings",
          to: "/dashboard/settings",
          access: ["ADMIN"],
          icon: Settings,
        },
      ],
    },
  ];

  const location = useLocation();
  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-65 flex-col shadow-r bg-stone-100 lg:flex">
        {/* Header section */}
        <div className="flex h-16 shrink-0 items-center px-4 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#004B8D]"></div>

            <div className="flex flex-col justify-center leading-none">
              <h1 className="text-base font-bold text-stone-800">Clinova</h1>
              <p className="text-[12px] font-medium text-stone-500 tracking-wide mt-0.5">
                HOSPITAL
              </p>
            </div>
          </div>
        </div>
        {/* menu section */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {SIDEBAR_LINKS.map((section) => {
              const allowedLinks = section.links.filter((link) =>
                link.access.includes(role),
              );

              if (allowedLinks.length === 0) {
                return null;
              }

              return (
                <div key={section.label}>
                  {/* Section Label */}
                  <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                    {section.label}
                  </p>

                  {/* Links */}
                  <div className="space-y-1">
                    {allowedLinks.map((link) => {
                      const Icon = link.icon;

                      const isActive = location.pathname === link.to;

                      return (
                        <Link
                          key={link.name}
                          to={link.to}
                          className={`
                          flex items-center gap-3 rounded-md px-3 py-2.5
                          text-sm font-medium transition
                          ${
                            isActive
                              ? "bg-[#004B8D]/10 text-[#004B8D]"
                              : "text-gray-500 hover:bg-[#004B8D]/10 hover:text-[#004B8D]"
                          }
                        `}
                        >
                          <Icon size={18} strokeWidth={1.8} />

                          <span>{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
        {/* footer div */}
        <div className="flex h-16 shrink-0 items-center text-left gap-4 px-4 border-t border-stone-200">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004B8D]">
            <p className="text-white text-sm font-semibold">K</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-stone-800">
              Koshish Khadka
            </span>
            <span className="text-[12px] font-medium text-stone-500 tracking-wide mt-0.5">
              Admin
            </span>
          </div>
        </div>
      </aside>
      {/* mobile responsive code */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-[260px]
          flex-col bg-stone-100 shadow-xl
          transition-transform duration-300
          lg:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-stone-200 px-4">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#004B8D]" />

            <div className="flex flex-col justify-center leading-none">
              <h1 className="text-base font-bold text-stone-800">Clinova</h1>

              <p className="mt-0.5 text-[12px] font-medium tracking-wide text-stone-500">
                HOSPITAL
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-1 text-gray-500 hover:bg-gray-200"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* <Navigation role={role} location={location} setIsOpen={setIsOpen} /> */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {SIDEBAR_LINKS.map((section) => {
              const allowedLinks = section.links.filter((link) =>
                link.access.includes(role),
              );

              if (allowedLinks.length === 0) {
                return null;
              }

              return (
                <div key={section.label}>
                  {/* Section Label */}
                  <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                    {section.label}
                  </p>

                  {/* Links */}
                  <div className="space-y-1">
                    {allowedLinks.map((link) => {
                      const Icon = link.icon;

                      const isActive = location.pathname === link.to;

                      return (
                        <Link
                          key={link.name}
                          to={link.to}
                          className={`
                          flex items-center gap-3 rounded-md px-3 py-2.5
                          text-sm font-medium transition
                          ${
                            isActive
                              ? "bg-[#004B8D]/10 text-[#004B8D]"
                              : "text-gray-500 hover:bg-[#004B8D]/10 hover:text-[#004B8D]"
                          }
                        `}
                        >
                          <Icon size={18} strokeWidth={1.8} />

                          <span>{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Mobile User */}
        {/* <UserFooter role={role} /> */}
        <div className="flex h-16 shrink-0 items-center text-left gap-4 px-4 border-t border-stone-200">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004B8D]">
            <p className="text-white text-sm font-semibold">K</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-stone-800">
              Koshish Khadka
            </span>
            <span className="text-[12px] font-medium text-stone-500 tracking-wide mt-0.5">
              Admin
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
