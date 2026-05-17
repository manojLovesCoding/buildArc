// components/Sidebar.jsx
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarDays,
  Trophy,
  Calendar,
  Menu,
  X,
  LogOut,
  Settings,
  Bell,
} from "lucide-react";
import api from "../../api/axios";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [admin, setAdmin] = useState(null); // ✅ ADDED
  const navigate = useNavigate();

  // ✅ FETCH ADMIN
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await api.get("/api/auth/profile");
        setAdmin(res.data.user);
      } catch (error) {
        console.error("Failed to fetch admin:", error);
      }
    };

    fetchAdmin();
  }, []);

  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Leads Management",
      icon: <Users size={20} />,
      path: "/lead-management",
    },
    {
      name: "Exhibitors",
      icon: <Building2 size={20} />,
      path: "/exhibitors-list",
    },
    {
      name: "Events",
      icon: <CalendarDays size={20} />,
      path: "/events-list",
    },
    {
      name: "Sales Pipeline",
      icon: <Trophy size={20} />,
      path: "/sales-pipeline",
    },
    {
      name: "Meetings",
      icon: <Calendar size={20} />,
      path: "/login",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
            B
          </div>

          <div>
            <h1 className="font-bold text-slate-900 leading-none">
              Buildarc CRM
            </h1>
            <p className="text-xs text-slate-500">Admin Panel</p>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-72 bg-white border-r border-slate-200
          flex flex-col transition-all duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* HEADER */}
        <div className="h-16 border-b border-slate-200 flex items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
              B
            </div>

            <div>
              <h1 className="font-bold text-lg text-slate-900 leading-none">
                Buildarc CRM
              </h1>

              <p className="text-xs text-slate-500 mt-1">
                Event Management
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>

        {/* USER (UPDATED ONLY THIS PART) */}
        <div className="p-5 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <img
              src={admin?.avatar || "https://i.pravatar.cc/100"}
              alt="profile"
              className="w-14 h-14 rounded-2xl object-cover"
            />

            <div>
              <h3 className="font-semibold text-slate-900">
                {admin?.name || "Loading..."}
              </h3>

              <p className="text-sm text-slate-500">
                {admin?.role || "Administrator"}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            Online
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                  flex items-center gap-3 px-4 py-3 rounded-2xl
                  transition-all duration-200 text-sm font-medium
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                `
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t border-slate-200 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition">
            <Bell size={20} />
            Notifications
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition">
            <Settings size={20} />
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-500 hover:bg-red-50 transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;