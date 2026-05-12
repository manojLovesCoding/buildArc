import { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Grid2X2,
  List,
  Filter,
  MapPin,
  ShieldCheck,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";

const ExhibitorsList = () => {
  const [view, setView] = useState("grid");

  const stats = [
    {
      title: "TOTAL BRANDS",
      value: "248",
      sub: "+12 this month",
      icon: <Grid2X2 size={18} />,
      iconStyle: "bg-blue-100 text-blue-600",
    },
    {
      title: "ACTIVE BOOTHS",
      value: "182",
      sub: "74% Capacity",
      icon: <MapPin size={18} />,
      iconStyle: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "DIAMOND PARTNERS",
      value: "18",
      sub: "High Priority",
      icon: <ShieldCheck size={18} />,
      iconStyle: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "PENDING APPS",
      value: "34",
      sub: "Needs Review",
      icon: <CalendarDays size={18} />,
      iconStyle: "bg-slate-100 text-slate-700",
    },
  ];

  const exhibitors = [
    {
      company: "Apex Stone Solutions",
      category: "Natural Stone & Marble",
      booth: "A-12",
      status: "Confirmed",
      tier: "Diamond",
      tierStyle: "bg-cyan-100 text-cyan-700",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=300&auto=format&fit=crop",
      user: "Marcus Chen",
      role: "Sales Director",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      company: "Lumina Smart Homes",
      category: "Automation & IOT",
      booth: "D-05",
      status: "Pending",
      tier: "Gold",
      tierStyle: "bg-amber-100 text-amber-700",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=300&auto=format&fit=crop",
      user: "Sarah Jenkins",
      role: "Account Manager",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
      company: "TimberCraft Intl",
      category: "Sustainable Timber",
      booth: "B-22",
      status: "Confirmed",
      tier: "Silver",
      tierStyle: "bg-slate-100 text-slate-600",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop",
      user: "Olaf Henderson",
      role: "Operations Lead",
      avatar: "https://i.pravatar.cc/100?img=18",
    },
    {
      company: "EcoSteel Structures",
      category: "Metal Fabrication",
      booth: "C-11",
      status: "Waitlist",
      tier: "Gold",
      tierStyle: "bg-amber-100 text-amber-700",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=300&auto=format&fit=crop",
      user: "Elena Rodriguez",
      role: "VP Marketing",
      avatar: "https://i.pravatar.cc/100?img=48",
    },
    {
      company: "GlassTech Facades",
      category: "Glass & Glazing",
      booth: "A-01",
      status: "Confirmed",
      tier: "Diamond",
      tierStyle: "bg-cyan-100 text-cyan-700",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&auto=format&fit=crop",
      user: "David Kim",
      role: "CEO",
      avatar: "https://i.pravatar.cc/100?img=52",
    },
    {
      company: "Vortex HVAC Systems",
      category: "Climate Control",
      booth: "F-44",
      status: "Confirmed",
      tier: "Silver",
      tierStyle: "bg-slate-100 text-slate-600",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=300&auto=format&fit=crop",
      user: "Tom Richards",
      role: "Field Manager",
      avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
      company: "Ceramica Elite",
      category: "Ceramics & Tiles",
      booth: "F-10",
      status: "Pending",
      tier: "Gold",
      tierStyle: "bg-amber-100 text-amber-700",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop",
      user: "Sofia Rossi",
      role: "Design Director",
      avatar: "https://i.pravatar.cc/100?img=22",
    },
    {
      company: "PureFlow Plumbing",
      category: "Water Systems",
      booth: "G-02",
      status: "Confirmed",
      tier: "Silver",
      tierStyle: "bg-slate-100 text-slate-600",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=300&auto=format&fit=crop",
      user: "Ben Murray",
      role: "National Sales",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* PAGE */}
      <div className="space-y-6">
        {/* HEADER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Grid2X2 size={15} />
                Exhibitor Management
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mt-2">
                Exhibitor Directory
              </h1>

              <p className="text-slate-500 mt-3 max-w-3xl text-sm leading-6">
                Manage construction industry partners, track brand
                participation, and monitor floor plan allocations for upcoming
                trade shows.
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3">
              <button className="h-11 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition text-sm font-medium text-slate-700">
                Audit Logs
              </button>

              <button className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center gap-2">
                <Plus size={16} />
                Register Brand
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-4"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconStyle}`}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-[11px] tracking-widest font-bold uppercase text-slate-500">
                    {item.title}
                  </p>

                  <div className="flex items-end gap-2 mt-1">
                    <h2 className="text-3xl font-bold text-slate-900">
                      {item.value}
                    </h2>

                    <span className="text-xs text-slate-400 mb-1">
                      {item.sub}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FILTER BAR */}
          <div className="mt-8 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
            {/* LEFT */}
            <div className="flex flex-col md:flex-row gap-3 flex-1">
              {/* SEARCH */}
              <div className="flex items-center gap-3 h-12 rounded-xl border border-slate-200 bg-white px-4 flex-1">
                <Search size={18} className="text-slate-400" />

                <input
                  type="text"
                  placeholder="Search by company, tag or contact..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>

              {/* SELECTS */}
              <select className="h-12 rounded-xl border border-slate-200 px-4 text-sm bg-white text-slate-600 min-w-[180px] outline-none">
                <option>All Industries</option>
              </select>

              <select className="h-12 rounded-xl border border-slate-200 px-4 text-sm bg-white text-slate-600 min-w-[120px] outline-none">
                <option>2026</option>
              </select>

              <button className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50">
                <Filter size={16} className="text-slate-500" />
              </button>
            </div>

            {/* RIGHT */}
            <div className="bg-white border border-slate-200 rounded-xl p-1 flex w-fit">
              <button
                onClick={() => setView("grid")}
                className={`h-10 px-4 rounded-lg text-sm font-medium flex items-center gap-2 transition ${
                  view === "grid"
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-500"
                }`}
              >
                <Grid2X2 size={15} />
                Grid
              </button>

              <button
                onClick={() => setView("table")}
                className={`h-10 px-4 rounded-lg text-sm font-medium flex items-center gap-2 transition ${
                  view === "table"
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-500"
                }`}
              >
                <List size={15} />
                Table
              </button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
          {exhibitors.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* TOP */}
              <div className="flex items-start justify-between">
                <img
                  src={item.image}
                  alt={item.company}
                  className="w-14 h-14 rounded-xl object-cover border border-slate-200"
                />

                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold ${item.tierStyle}`}
                >
                  {item.tier}
                </span>
              </div>

              {/* TITLE */}
              <div className="mt-5">
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.company}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {item.category}
                </p>
              </div>

              {/* STATUS */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-[10px] uppercase tracking-wide font-bold text-slate-400">
                    Current Status
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {item.status}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-[10px] uppercase tracking-wide font-bold text-slate-400">
                    Booth #
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {item.booth}
                  </p>
                </div>
              </div>

              {/* USER */}
              <div className="mt-5 pt-4 border-t border-dashed border-slate-200 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.user}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold text-slate-800">
                    {item.user}
                  </h4>

                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-5 flex items-center gap-3">
                <button className="flex-1 h-11 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium text-slate-700">
                  Profile
                </button>

                <button className="w-11 h-11 rounded-xl border border-slate-200 hover:bg-slate-50 transition flex items-center justify-center">
                  <MoreVertical size={18} className="text-slate-500" />
                </button>
              </div>
            </div>
          ))}

          {/* ADD CARD */}
          <button className="h-[300px] border-2 border-dashed border-slate-300 rounded-2xl bg-white hover:bg-slate-50 transition flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
              <Plus size={28} className="text-slate-500" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-800">
              Add New Exhibitor
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Invite a brand to participate
            </p>
          </button>
        </div>

        {/* FOOTER */}
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 shadow-sm">
          <p className="text-sm text-slate-500">
            Showing 1 to 8 of 248 exhibitors
          </p>

          <div className="flex items-center gap-2">
            <button className="h-10 px-4 rounded-xl border border-slate-200 text-sm text-slate-400">
              Previous
            </button>

            <button className="w-10 h-10 rounded-xl bg-slate-900 text-white text-sm font-semibold">
              1
            </button>

            <button className="w-10 h-10 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
              2
            </button>

            <button className="w-10 h-10 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
              3
            </button>

            <button className="h-10 px-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">
              Next
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500 shadow-sm">
          <p>
            © 2026 Buildarc CRM. Construction Industry Trade Exhibition
            Platform.
          </p>

          <div className="flex items-center gap-5">
           

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              System Online
            </div>

            <span>v2.4.0-stable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitorsList;