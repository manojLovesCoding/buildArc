import { useState, useEffect } from "react";
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

import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const EventsList = () => {
  const [activeTab, setActiveTab] = useState("All Events");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const tabs = ["All Events", "Upcoming", "Ongoing"];

  // FETCH EVENTS
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);

        const res = await api.get("/api/events");

        const mapped = (res.data.events || []).map((e) => ({
          id: e._id, // 👈 ADD THIS
          title: e.eventName,
          category: e.eventType?.toUpperCase() || "GENERAL",
          status: e.registrationOpen ? "Upcoming" : "Draft",
          location: e.venueName || "TBA",
          date:
            e.startDate && e.endDate
              ? `${new Date(e.startDate).toDateString()} - ${new Date(
                  e.endDate,
                ).toDateString()}`
              : "TBA",
          exhibitors: "0 Exhibitors",
          sessions: "0 Sessions",
          occupancy: "0%",
          width: "w-[0%]",
          image:
            e.bannerImage ||
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
        }));

        setEvents(mapped);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Events Management
            </h1>

            <p className="text-slate-500 mt-3 text-sm leading-6 max-w-2xl">
              Orchestrate trade shows, floor plans, and exhibitor relationships.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="h-11 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition text-sm font-medium text-slate-700 flex items-center gap-2">
              <Filter size={16} />
              Filters
            </button>

            <button onClick={() => navigate("/create-event")} className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center gap-2">
              <Plus size={16} />
              Create Event
            </button>
          </div>
        </div>

        {/* STATS (UNCHANGED) */}
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
                  <p className="text-xs text-slate-500 mt-3">↗ {item.growth}</p>
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

        {/* FILTER BAR (UNCHANGED) */}
        <div className="mt-8 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
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

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-3 h-11 rounded-xl border border-slate-200 bg-white px-4 min-w-[320px]">
              <Search size={17} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or venue..."
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>

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
      {loading ? (
        <div className="text-center text-slate-500 py-10">
          Loading events...
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

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

                <button className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center">
                  <MoreVertical size={16} className="text-slate-700" />
                </button>
              </div>

              <div className="p-5">
                <p className="text-[11px] uppercase tracking-widest font-bold text-blue-600">
                  {item.category}
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-3 leading-snug">
                  {item.title}
                </h2>

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

                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <button className="h-11 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium text-slate-700">
                      Manage Allocation
                    </button>

                    <button
                      onClick={() => navigate(`/events/${item.id}/booths`)}
                      className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      Details
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* RESOURCES + FOOTER (UNCHANGED) */}
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

      <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500 shadow-sm">
        <p>
          © 2026 Buildarc CRM. Construction Industry Trade Exhibition Platform.
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
          className={`text-slate-500 transition ${open ? "rotate-180" : ""}`}
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
