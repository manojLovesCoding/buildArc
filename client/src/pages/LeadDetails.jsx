import {
  ArrowLeft,
  Trash2,
  Save,
  TrendingUp,
  Mail,
  Phone,
  Globe,
  MapPin,
  Clock3,
  MessageSquare,
  MoreVertical,
  ExternalLink,
} from "lucide-react";

const LeadDetails = () => {
  const timeline = [
    {
      title: "Outbound Sales Call",
      user: "Alex Rivera",
      description:
        "Discussed pricing for the 45sqm corner booth. Jonathan was receptive but needs to clear the VIP package with his marketing director.",
      time: "Today, 09:12 AM",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Contract Sent",
      user: "Alex Rivera",
      description:
        "Sent updated sponsorship prospectus and booth reservation agreement for signing.",
      time: "Oct 24, 04:30 PM",
      color: "bg-violet-100 text-violet-600",
    },
    {
      title: "Meeting at HQ",
      user: "Sarah Jenkins",
      description:
        "Initial face-to-face meeting. Explained sector growth trends and how Buildarc provides better ROI than competitor shows.",
      time: "Oct 22, 11:00 AM",
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Lead Created",
      user: "Exhibition Portal",
      description:
        "Lead automatically imported from 'BuildArc 2026' early-bird registration list.",
      time: "Oct 15, 10:20 AM",
      color: "bg-slate-100 text-slate-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* TOP BAR */}
      <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-center justify-center transition">
              <ArrowLeft size={18} />
            </button>

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-bold text-slate-900">
                  Edit Lead
                </h1>

                <span className="px-2 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                  ID: LD-8842
                </span>
              </div>

              <p className="text-sm text-slate-500 mt-1">
                Last updated 2 hours ago
              </p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="h-11 px-4 rounded-xl text-red-500 hover:bg-red-50 transition border border-red-100 flex items-center gap-2 text-sm font-medium">
              <Trash2 size={16} />
              Delete
            </button>

            <button className="h-11 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium">
              Cancel
            </button>

            <button className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center gap-2">
              <Save size={16} />
              Save Lead
            </button>

            <button className="h-11 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition text-white text-sm font-semibold flex items-center gap-2">
              <TrendingUp size={16} />
              Convert to Deal
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 2xl:grid-cols-[1fr_340px] gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          {/* PROFILE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
              <div className="flex items-start gap-5">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="profile"
                  className="w-20 h-20 rounded-2xl object-cover"
                />

                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Jonathan Vance
                  </h2>

                  <p className="text-slate-500 mt-1">
                    Stellar Building Solutions
                  </p>
                </div>
              </div>

              <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold w-fit">
                In Negotiation
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <InfoCard label="Lead Type" value="Brand" />

              <InfoCard
                label="Source"
                value="2026 ArchCon Exhibition"
              />

              <InfoCard
                label="Assigned To"
                value="Alex Rivera"
              />
            </div>
          </div>

          {/* FORMS */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* GENERAL */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  General Information
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Official business and categorization details.
                </p>
              </div>

              <div className="space-y-5 mt-8">
                <Input label="Full Name" value="Jonathan Vance" />

                <Input
                  label="Company Name"
                  value="Stellar Building Solutions"
                />

                <div className="grid grid-cols-2 gap-4">
                  <Select label="Type" value="Brand" />

                  <Select label="Status" value="In Negotiation" />
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Contact Information
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Primary communication channels.
                </p>
              </div>

              <div className="space-y-5 mt-8">
                <Input
                  icon={<Mail size={16} />}
                  label="Email Address"
                  value="j.vance@stellarbuild.com"
                />

                <Input
                  icon={<Phone size={16} />}
                  label="Phone Number"
                  value="+44 (0) 20 7946 0123"
                />

                <Input
                  icon={<Globe size={16} />}
                  label="LinkedIn URL"
                  value="https://linkedin.com/in/..."
                />
              </div>
            </div>
          </div>

          {/* NOTES */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Lead Overview & Internal Notes
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Detailed background and strategy notes for the sales team.
                </p>
              </div>

              <button className="h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium flex items-center gap-2 w-fit">
                <MessageSquare size={16} />
                Add Communication Log
              </button>
            </div>

            <div className="p-6">
              <textarea
                rows={8}
                defaultValue={`Jonathan represents Stellar Building Solutions, a major architectural glazing manufacturer from Germany.
They are interested in taking a 45sqm booth at the upcoming BuildArc Expo.

Priorities:
1. Corner booth availability near Main Stage.
2. VIP networking session access.
3. Media package integration.`}
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
              />
            </div>

            <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
              <p className="text-xs text-slate-400">
                Last edited by Alex Rivera at 10:45 AM today
              </p>

              <div className="flex items-center gap-3">
                <button className="h-10 px-4 rounded-xl hover:bg-slate-100 transition text-sm font-medium">
                  Discard
                </button>

                <button className="h-10 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold">
                  Update Notes
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* DEALS */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-900">
                  Related Deals
                </h3>
              </div>

              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-slate-900">
                    BuildArc 2026 - Gold Booth
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    $24,500 • Expected Dec 15
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                    Negotiation
                  </span>

                  <ExternalLink size={16} className="text-slate-400" />
                </div>
              </div>

              <div className="px-6 py-5 border-t border-slate-200 text-center text-sm text-slate-400 italic">
                No other active deals
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Location & Web
              </h3>

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Main Office</p>

                    <h4 className="font-semibold text-slate-900 mt-1">
                      London, UK
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                    <Globe size={18} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Website</p>

                    <a
                      href="/"
                      className="font-semibold text-blue-600 mt-1 block"
                    >
                      www.stellarbuild.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* TIMELINE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Activity Timeline
              </h2>

              <button className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center transition">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="mt-8 space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="relative">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
                    >
                      <Clock3 size={16} />
                    </div>

                    {index !== timeline.length - 1 && (
                      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-px h-16 bg-slate-200"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <span className="text-xs font-medium text-blue-600">
                        by {item.user}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 leading-6 mt-3">
                      {item.description}
                    </p>

                    <span className="mt-3 flex items-center gap-1 text-xs text-slate-400">
                      <Clock3 size={12} />
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 h-11 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm font-medium">
              Load More Activity
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-slate-900">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <QuickButton label="Log Call" />

              <QuickButton label="Send Email" />

              <QuickButton label="Schedule" />

              <QuickButton label="Assign Rep" />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500 shadow-sm">
        <p>
          © 2026 Buildarc CRM. Construction Industry Trade Exhibition Platform.
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
  );
};

export default LeadDetails;

/* INFO CARD */
const InfoCard = ({ label, value }) => {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="text-xs font-bold tracking-widest uppercase text-slate-500">
        {label}
      </p>

      <h4 className="font-semibold text-slate-900 mt-3">{value}</h4>
    </div>
  );
};

/* INPUT */
const Input = ({ label, value, icon }) => {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <div className="mt-2 relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}

        <input
          type="text"
          defaultValue={value}
          className={`w-full h-12 rounded-xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
            icon ? "pl-11 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
};

/* SELECT */
const Select = ({ label, value }) => {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>

      <button className="w-full mt-2 h-12 rounded-xl border border-slate-200 px-4 flex items-center justify-between text-sm text-slate-700 hover:bg-slate-50 transition">
        {value}

        <span>›</span>
      </button>
    </div>
  );
};

/* QUICK BUTTON */
const QuickButton = ({ label }) => {
  return (
    <button className="h-12 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition text-sm font-medium text-slate-700">
      {label}
    </button>
  );
};