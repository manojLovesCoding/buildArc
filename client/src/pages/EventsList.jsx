import { useState } from "react";
import {
  CalendarDays,
  Plus,
  Filter,
  Search,
  MoreVertical,
  MapPin,
  Users,
  Monitor,
  ChevronDown,
  Grid2X2,
  ArrowRight,
  Settings,
  LogOut,
  Ticket,
  TrendingUp,
} from "lucide-react";

const EventsList = () => {
  const [activeTab, setActiveTab] = useState("All Events");

  const stats = [
    {
      title: "Total Events",
      value: "24",
      growth: "+12% from last year",
      icon: <CalendarDays size={20} />,
      iconStyle: "bg-blue-600 text-white",
    },
    {
      title: "Active Exhibitors",
      value: "1,280",
      growth: "+5.4% from last year",
      icon: <Users size={20} />,
      iconStyle: "bg-emerald-500 text-white",
    },
    {
      title: "Floor Revenue",
      value: "$4.2M",
      growth: "+18% from last year",
      icon: <Ticket size={20} />,
      iconStyle: "bg-slate-100 text-slate-700",
    },
    {
      title: "Avg. Occupancy",
      value: "84.2%",
      growth: "+2.1% from last year",
      icon: <TrendingUp size={20} />,
      iconStyle: "bg-slate-100 text-slate-700",
    },
  ];

  const events = [
    {
      title: "BuildExpo International 2026",
      category: "CONSTRUCTION",
      status: "Upcoming",
      location: "Dubai World Trade Centre",
      date: "Oct 12 - Oct 15, 2026",
      exhibitors: "450 Exhibitors",
      sessions: "24 Sessions",
      occupancy: "92%",
      width: "w-[92%]",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "GreenBuild Summit & Expo",
      category: "SUSTAINABILITY",
      status: "Ongoing",
      location: "Singapore Expo, Hall 4",
      date: "Sep 05 - Sep 07, 2026",
      exhibitors: "120 Exhibitors",
      sessions: "24 Sessions",
      occupancy: "100%",
      width: "w-full",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Concrete & Masonry Middle East",
      category: "MATERIALS",
      status: "Draft",
      location: "ADNEC, Abu Dhabi",
      date: "Nov 20 - Nov 22, 2026",
      exhibitors: "85 Exhibitors",
      sessions: "24 Sessions",
      occupancy: "45%",
      width: "w-[45%]",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Smart City Infrastructure 2026",
      category: "TECH/INFRA",
      status: "Upcoming",
      location: "The O2 Arena, London",
      date: "Dec 10 - Dec 12, 2026",
      exhibitors: "310 Exhibitors",
      sessions: "24 Sessions",
      occupancy: "68%",
      width: "w-[68%]",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Interior Design & Fit-out Expo",
      category: "INTERIORS",
      status: "Ongoing",
      location: "Riyadh Front Exhibition Center",
      date: "Aug 14 - Aug 16, 2026",
      exhibitors: "200 Exhibitors",
      sessions: "24 Sessions",
      occupancy: "98%",
      width: "w-[98%]",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Global HVAC & MEP Forum",
      category: "MEP",
      status: "Draft",
      location: "VCC, Vancouver",
      date: "Jan 15 - Jan 18, 2025",
      exhibitors: "45 Exhibitors",
      sessions: "24 Sessions",
      occupancy: "12%",
      width: "w-[12%]",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const tabs = ["All Events", "Upcoming", "Ongoing"];

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Events Management
            </h1>

            <p className="text-slate-500 mt-3 text-sm leading-6 max-w-2xl">
              Orchestrate trade shows, floor plans, and exhibitor
              relationships.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="h-11 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition text-sm font-medium text-slate-700 flex items-center gap-2">
              <Filter size={16} />
              Filters
            </button>

            <button className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center gap-2">
              <Plus size={16} />
              Create Event
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">{item.title}</p>

                  <h2 className="text-4xl font-bold text-slate-900 mt-3">
                    {item.value}
                  </h2>

                  <p className="text-xs text-slate-500 mt-3">
                    ↗ {item.growth}
                  </p>
                </div>

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconStyle}`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FILTER BAR */}
        <div className="mt-8 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          {/* LEFT */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`h-11 px-5 rounded-xl text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-slate-100 text-slate-900 border border-slate-200"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* SEARCH */}
            <div className="flex items-center gap-3 h-11 rounded-xl border border-slate-200 bg-white px-4 min-w-[320px]">
              <Search size={17} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search by name or venue..."
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2">
              <button className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition">
                <Grid2X2 size={17} className="text-blue-600" />
              </button>

              <button className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition">
                <MoreVertical size={17} className="text-slate-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* EVENTS GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {events.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* STATUS */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                    item.status === "Upcoming"
                      ? "bg-amber-500/90 text-white"
                      : item.status === "Ongoing"
                      ? "bg-blue-600/90 text-white"
                      : "bg-slate-200/90 text-slate-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* MENU */}
              <button className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center">
                <MoreVertical size={16} className="text-slate-700" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <p className="text-[11px] uppercase tracking-widest font-bold text-blue-600">
                {item.category}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-3 leading-snug">
                {item.title}
              </h2>

              {/* META */}
              <div className="space-y-3 mt-5 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  {item.date}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={15} />
                  {item.location}
                </div>
              </div>

              {/* OCCUPANCY */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">
                    Booth Occupancy
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    {item.occupancy}
                  </span>
                </div>

                <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-blue-600 ${item.width}`}
                  ></div>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Users size={14} />
                    {item.exhibitors}
                  </span>

                  <span className="flex items-center gap-2">
                    <Monitor size={14} />
                    {item.sessions}
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <button className="h-11 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium text-slate-700">
                    Manage Allocation
                  </button>

                  <button className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center justify-center gap-2">
                    Details
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RESOURCES */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Manager Resources
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Internal guidelines for event logistics and booth planning.
          </p>
        </div>

        <div className="mt-10 divide-y divide-slate-200">
          <ResourceItem
            title="Standard Booth Pricing Tiers 2026"
            content="Premium Zone A booths are priced at $1,200 per sq/m. Standard Zone B booths are $850 per sq/m. Early bird discounts of 15% apply for bookings made 6 months prior to the event start date."
            open
          />

          <ResourceItem title="Vendor Security & Insurance Requirements" />

          <ResourceItem title="Booth Allocation Logic & Conflicts" />
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500 shadow-sm">
        <p>
          © 2026 Buildarc CRM. Construction Industry Trade Exhibition
          Platform.
        </p>

        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 hover:text-slate-700 transition">
            <Settings size={15} />
            Settings
          </button>

          <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition">
            <LogOut size={15} />
            Logout
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            System Online
          </div>

          <span>v2.4.0-stable</span>
        </div>
      </div>
    </div>
  );
};

export default EventsList;

/* RESOURCE */
const ResourceItem = ({ title, content, open }) => {
  return (
    <div className="py-6">
      <button className="w-full flex items-center justify-between text-left">
        <h3 className="font-semibold text-slate-900">{title}</h3>

        <ChevronDown
          size={18}
          className={`text-slate-500 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="text-sm text-slate-500 leading-7 mt-5 max-w-5xl">
          {content}
        </p>
      )}
    </div>
  );
};