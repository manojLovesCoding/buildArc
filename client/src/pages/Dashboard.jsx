import {
  Users,
  Building2,
  CalendarDays,
  DollarSign,
  Search,
  Plus,
  FileText,
  Bell,
  ArrowUpRight,
  Calendar,
  Briefcase,
  Clock3,
  Settings,
  LogOut,
  UserPlus,
  Map,
  Plane,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "TOTAL LEADS",
      value: "2,845",
      growth: "+12.5%",
      icon: <Users size={22} />,
      iconStyle: "bg-blue-100 text-blue-600",
      growthStyle: "text-slate-700",
    },
    {
      title: "ACTIVE EXHIBITORS",
      value: "412",
      growth: "+4.2%",
      icon: <Building2 size={22} />,
      iconStyle: "bg-blue-100 text-blue-600",
      growthStyle: "text-slate-700",
    },
    {
      title: "UPCOMING EVENTS",
      value: "08",
      growth: "On Track",
      icon: <CalendarDays size={22} />,
      iconStyle: "bg-blue-100 text-blue-600",
      growthStyle: "text-slate-700",
    },
    {
      title: "REVENUE FORECAST",
      value: "$1.2M",
      growth: "-2.1%",
      icon: <DollarSign size={22} />,
      iconStyle: "bg-blue-100 text-blue-600",
      growthStyle: "text-red-500 bg-red-50",
    },
  ];

  const portfolio = [
    {
      title: "Global Concrete Summit 2026",
      date: "Oct 15 - 18",
      brands: "142 Brands",
      status: "Active",
      statusStyle: "bg-blue-500 text-white",
    },
    {
      title: "Modern Architecture Expo",
      date: "Nov 02 - 05",
      brands: "89 Brands",
      status: "Draft",
      statusStyle: "bg-slate-100 text-slate-700",
    },
    {
      title: "Interior Design Festival",
      date: "Dec 12 - 14",
      brands: "210 Brands",
      status: "Selling",
      statusStyle: "bg-slate-100 text-slate-700",
    },
  ];

  const activities = [
    {
      name: "Sarah Chen",
      message: "converted a lead from 'ArchBuild Expo'",
      time: "12 minutes ago",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Marcus Wright",
      message: "uploaded 150 new leads for 'Urban Masonry 2026'",
      time: "2 hours ago",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Elena Rodriguez",
      message: "finalized booth allocation for South Hall",
      time: "4 hours ago",
      image: "https://i.pravatar.cc/150?img=48",
    },
    {
      name: "James Wilson",
      message: "scheduled a follow-up meeting with BuildCorp Inc.",
      time: "5 hours ago",
      image: "https://i.pravatar.cc/150?img=15",
    },
  ];

  return (
    <div className="space-y-6">
      {/* TOP HEADER */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Admin Dashboard
            </h1>

            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Welcome back, Alex. Here's a snapshot of the CRM performance
              today.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
            {/* SEARCH */}
            <div className="flex items-center gap-3 h-11 rounded-xl bg-slate-100 px-4 w-full sm:w-80">
              <Search size={18} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search leads, events, or companies..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3">
              <button className="flex-1 sm:flex-none h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium flex items-center justify-center gap-2">
                <FileText size={16} />
                Export Report
              </button>

              <button className="flex-1 sm:flex-none h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center justify-center gap-2">
                <Plus size={16} />
                New Lead
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconStyle}`}
              >
                {item.icon}
              </div>

              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${item.growthStyle}`}
              >
                ↗ {item.growth}
              </span>
            </div>

            <div className="mt-5">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-500">
                {item.title}
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mt-2">
                {item.value}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 2xl:grid-cols-[1fr_360px] gap-6">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* CHART + DONUT */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* CHART */}
            <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Lead Generation Trends
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Monthly acquisition across all categories
                  </p>
                </div>

                <div className="bg-slate-100 rounded-xl p-1 flex w-fit">
                  <button className="px-4 h-9 rounded-lg bg-white shadow-sm text-sm font-medium">
                    6 Months
                  </button>

                  <button className="px-4 h-9 rounded-lg text-sm text-slate-500">
                    1 Year
                  </button>
                </div>
              </div>

              {/* CHART */}
              <div className="mt-10 h-[320px] relative overflow-hidden">
                {/* GRID */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[1000, 750, 500, 250, 0].map((n) => (
                    <div
                      key={n}
                      className="border-t border-dashed border-slate-200 relative"
                    >
                      <span className="absolute -top-3 left-0 text-xs text-slate-400">
                        {n}
                      </span>
                    </div>
                  ))}
                </div>

                {/* MONTHS */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-400 px-10">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                <svg
                  viewBox="0 0 600 300"
                  className="absolute inset-0 w-full h-full"
                >
                  <defs>
                    <linearGradient id="paint" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />

                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 220 C70 200,110 180,170 185 C240 190,280 210,340 180 C400 150,470 100,600 70"
                    fill="none"
                    stroke="#1d4ed8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M0 220 C70 200,110 180,170 185 C240 190,280 210,340 180 C400 150,470 100,600 70 L600 300 L0 300 Z"
                    fill="url(#paint)"
                  />
                </svg>
              </div>
            </div>

            {/* DONUT */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Revenue Source Mix
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Breakdown by service type
                </p>
              </div>

              {/* DONUT */}
              <div className="flex justify-center mt-12">
                <div className="relative w-48 h-48 rounded-full bg-[conic-gradient(#1d4ed8_0_40%,#10b981_40_68%,#000_68_85%,#d1d5db_85_100%)]">
                  <div className="absolute inset-5 bg-white rounded-full"></div>
                </div>
              </div>

              {/* LEGENDS */}
              <div className="mt-10 space-y-4">
                <Legend
                  color="bg-blue-600"
                  label="Exhibitor Fees"
                  value="$400k"
                />

                <Legend
                  color="bg-emerald-500"
                  label="Sponsorships"
                  value="$300k"
                />

                <Legend
                  color="bg-black"
                  label="Lead Retrieval"
                  value="$150k"
                />

                <Legend
                  color="bg-slate-300"
                  label="Digital Ads"
                  value="$150k"
                />
              </div>
            </div>
          </div>

          {/* PORTFOLIO */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Portfolio Spotlight
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Major upcoming trade shows & exhibitions
                </p>
              </div>

              <button className="h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium w-fit">
                View Calendar
              </button>
            </div>

            <div className="mt-8 space-y-7">
              {portfolio.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {item.date}
                        </span>

                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {item.brands}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${item.statusStyle}`}
                      >
                        {item.status}
                      </span>

                      <ArrowUpRight size={18} className="text-slate-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PROGRESS */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-600">
                  Booth Utilization Rate (Avg)
                </span>

                <span className="text-sm font-semibold text-blue-600">
                  82%
                </span>
              </div>

              <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-[82%] bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* ACTIVITY */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Recent Activity
            </h2>

            <div className="mt-8 space-y-7">
              {activities.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt="profile"
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    {index !== activities.length - 1 && (
                      <div className="absolute left-1/2 top-12 -translate-x-1/2 w-px h-12 bg-slate-200"></div>
                    )}
                  </div>

                  <div>
                    <p className="text-sm leading-6 text-slate-700">
                      <span className="font-semibold text-slate-900">
                        {item.name}
                      </span>{" "}
                      {item.message}
                    </p>

                    <span className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                      <Clock3 size={12} />
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 h-11 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium text-slate-700">
              View Detailed Audit Logs
            </button>
          </div>

          {/* OPERATIONS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Global Operations
            </h2>

            <div className="mt-6 space-y-3">
              <ActionButton
                icon={<UserPlus size={18} />}
                label="Register New Exhibitor"
              />

              <ActionButton
                icon={<Plane size={18} />}
                label="Book Meeting Space"
              />

              <ActionButton
                icon={<Map size={18} />}
                label="Manage Floor Plans"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500 shadow-sm">
        <p>© 2026 Buildarc CRM. Construction Industry Trade Exhibition Platform.</p>

        <div className="flex items-center gap-5">
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

export default Dashboard;

/* LEGEND */
const Legend = ({ color, label, value }) => {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        <span className={`w-3 h-3 rounded-full ${color}`}></span>

        <span className="text-slate-600">{label}</span>
      </div>

      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
};

/* ACTION BUTTON */
const ActionButton = ({ icon, label }) => {
  return (
    <button className="w-full h-14 rounded-xl border border-slate-200 hover:bg-slate-50 transition px-4 flex items-center gap-3 text-sm font-medium text-slate-700">
      <span className="text-slate-500">{icon}</span>
      {label}
    </button>
  );
};