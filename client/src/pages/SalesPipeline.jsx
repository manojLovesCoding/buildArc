// pages/SalesPipeline.jsx

import {
  Search,
  Bell,
  Plus,
  Filter,
  Download,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Clock3,
  Building2,
} from "lucide-react";

const SalesPipeline = () => {
  const pipeline = [
    {
      title: "NEW DEALS",
      count: "2 Deals",
      amount: "$20,500",
      deals: [
        {
          title: "Exhibition Space - TechBuild",
          price: "$12,500",
          company: "TechBuild Solutions",
          user: "SARAH",
          days: "2d",
        },
        {
          title: "Sponsorship - ArchiCon 2026",
          price: "$8,000",
          company: "Modern Structures",
          user: "ALEX",
          days: "5d",
        },
      ],
    },

    {
      title: "CONTACTED",
      count: "1 Deal",
      amount: "$24,000",
      deals: [
        {
          title: "Premium Booth - SteelCraft",
          price: "$24,000",
          company: "SteelCraft Industries",
          user: "SARAH",
          days: "1d",
        },
      ],
    },

    {
      title: "NEGOTIATION",
      count: "2 Deals",
      amount: "$60,000",
      deals: [
        {
          title: "Custom Pavilion - EcoMaterials",
          price: "$45,000",
          company: "EcoMaterials Group",
          user: "MARCUS",
          days: "12d",
          danger: true,
        },
        {
          title: "Keynote Slot - ConcretePlus",
          price: "$15,000",
          company: "ConcretePlus",
          user: "MARCUS",
          days: "3d",
        },
      ],
    },

    {
      title: "CLOSED WON",
      count: "1 Deal",
      amount: "$5,500",
      deals: [
        {
          title: "Standard Booth - GlassWorks",
          price: "$5,500",
          company: "GlassWorks Ltd",
          user: "ALEX",
          days: "0d",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* TOP */}
        <div className="px-6 py-5 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-slate-900">
                Sales Pipeline
              </h1>

              <div className="hidden lg:flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                  ↗ Active Forecast: $342K
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  Q4 Target: 82%
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap gap-3">
            <button className="h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition flex items-center gap-2 text-sm font-medium">
              <Filter size={16} />
              Filters
            </button>

            <button className="h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition flex items-center gap-2 text-sm font-medium">
              <Download size={16} />
              Export
            </button>

            <button className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center gap-2">
              <Plus size={16} />
              Create Deal
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="border-t border-slate-200 px-6 py-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <MetricCard
            title="TOTAL VALUE"
            value="$110,000"
            subtitle="+12% from last month"
            icon={<DollarSign size={18} />}
          />

          <MetricCard
            title="WEIGHTED FORECAST"
            value="$79,200"
            subtitle="Based on stage probability"
            icon={<TrendingUp size={18} />}
          />

          <MetricCard
            title="DEALS AT RISK"
            value="4 Deals"
            subtitle="Action required"
            icon={<AlertCircle size={18} />}
            danger
          />

          <MetricCard
            title="AVG. CYCLE TIME"
            value="18 Days"
            subtitle="Industry avg: 22d"
            icon={<Clock3 size={18} />}
          />
        </div>
      </div>

      {/* PIPELINE */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-5 min-w-max">
          {pipeline.map((stage, index) => (
            <div
              key={index}
              className="w-[300px] min-h-[540px] bg-slate-50 border border-slate-200 rounded-2xl p-4"
            >
              {/* HEADER */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-sm font-bold tracking-wide text-slate-800">
                    {stage.title}
                  </h2>

                  <p className="text-xs text-slate-400 mt-1">
                    {stage.count}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                  {stage.amount}
                </span>
              </div>

              {/* DEALS */}
              <div className="mt-5 space-y-4">
                {stage.deals.map((deal, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
                  >
                    <h3 className="text-sm font-semibold text-slate-800 leading-6">
                      {deal.title}
                    </h3>

                    <div className="mt-5 text-3xl font-bold text-blue-600">
                      {deal.price}
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                      <Building2 size={14} />
                      {deal.company}
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 15}`}
                          alt=""
                          className="w-7 h-7 rounded-full"
                        />

                        <span className="text-[11px] font-semibold text-slate-500">
                          {deal.user}
                        </span>
                      </div>

                      <span
                        className={`px-2 py-1 rounded-full text-[11px] flex items-center gap-1 ${
                          deal.danger
                            ? "bg-red-50 text-red-500"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Clock3 size={10} />
                        {deal.days}
                      </span>
                    </div>
                  </div>
                ))}

                {/* ADD DEAL */}
                <button className="w-full h-14 rounded-2xl border-2 border-slate-300 hover:border-blue-400 transition flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
                  <Plus size={16} />
                  Add Deal
                </button>
              </div>
            </div>
          ))}

          {/* ADD STAGE */}
          <div className="w-[300px] min-h-[540px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400">
            <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center">
              <Plus size={20} />
            </div>

            <p className="mt-5 text-sm font-semibold">
              Add Pipeline Stage
            </p>
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

      {/* FLOATING ACTION */}
      <button className="fixed bottom-6 right-6 h-12 px-5 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold shadow-2xl flex items-center gap-2">
        <Plus size={16} />
        Drag cards to update stages
      </button>
    </div>
  );
};

export default SalesPipeline;

/* METRIC CARD */
const MetricCard = ({
  title,
  value,
  subtitle,
  icon,
  danger = false,
}) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
          {title}
        </p>

        <h2 className="text-4xl font-bold text-slate-900 mt-2">
          {value}
        </h2>

        <p
          className={`text-xs mt-2 ${
            danger ? "text-red-500" : "text-slate-400"
          }`}
        >
          {subtitle}
        </p>
      </div>

      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          danger
            ? "bg-red-50 text-red-500"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        {icon}
      </div>
    </div>
  );
};