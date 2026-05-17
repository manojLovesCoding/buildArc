import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  ChevronRight,
  Download,
  ExternalLink,
  Filter,
  Globe,
  Mail,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Star,
  Boxes,
  TrendingUp,
} from "lucide-react";

const ExhibitorProfile = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [exhibitor, setExhibitor] = useState(null);

  useEffect(() => {
    fetchExhibitor();
  }, []);

  const fetchExhibitor = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/api/exhibitors/${id}`);
      setExhibitor(res.data.exhibitor);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const contacts = [
    {
      name: exhibitor?.fullName || "N/A",
      role: exhibitor?.jobTitle || "N/A",
      avatar: `https://ui-avatars.com/api/?name=${exhibitor?.fullName || "User"}`,
      status: "bg-emerald-500",
    },
  ];

  const strengths = [
    "High visitor engagement rates (Avg. 1.2k/event)",
    "Strong B2B matching performance",
    "Consistently large booth installations (60m²+)",
    "Active participant in technical seminars",
  ];

  if (loading) {
    return (
      <div className="py-20 text-center text-slate-500">
        Loading exhibitor...
      </div>
    );
  }

  if (!exhibitor) {
    return (
      <div className="py-20 text-center text-slate-500">
        Exhibitor not found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HERO */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 lg:p-8">
          <div className="flex flex-col 2xl:flex-row 2xl:items-start 2xl:justify-between gap-8">

            {/* LEFT */}
            <div className="flex flex-col lg:flex-row gap-6">

              {/* LOGO */}
              <div className="relative">
                <div className="w-28 h-28 rounded-3xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=300&auto=format&fit=crop"
                    alt="brand"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white"></span>
              </div>

              {/* DETAILS */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl font-bold text-slate-900">
                    {exhibitor.companyName}
                  </h1>

                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                    Gold Tier
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Building2 size={15} />
                    {exhibitor.industry}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={15} />
                    {exhibitor.headquarters || "N/A"}
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={exhibitor.website}
                    target="_blank"
                    rel="noreferrer"
                    className="h-11 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition text-sm font-medium text-slate-700 flex items-center gap-2"
                  >
                    <Globe size={16} />
                    Website
                  </a>

                  <button className="h-11 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition text-sm font-medium text-slate-700 flex items-center gap-2">
                    <ExternalLink size={16} />
                    Public Profile
                  </button>

                  <button className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold flex items-center gap-2">
                    <Download size={16} />
                    Export Data
                  </button>
                </div>
              </div>
            </div>

            {/* STATS (unchanged UI) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-w-full 2xl:min-w-[420px]">

              <StatCard
                icon={<CalendarDays size={18} />}
                value="14"
                label="TOTAL EVENTS"
                iconStyle="bg-blue-100 text-blue-600"
              />

              <StatCard
                icon={<Boxes size={18} />}
                value="28"
                label="PRODUCTS"
                iconStyle="bg-emerald-100 text-emerald-600"
              />

              <StatCard
                icon={<TrendingUp size={18} />}
                value="A+"
                label="LEAD SCORE"
                iconStyle="bg-slate-100 text-slate-700"
              />
            </div>

          </div>
        </div>

        {/* TABS (unchanged) */}
        <div className="border-t border-slate-200 px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div className="flex overflow-x-auto scrollbar-hide">
              <Tab active label="Overview" />
              <Tab label="Product Catalog (28)" />
              <Tab label="Exhibition History" />
              <Tab label="Internal CRM Notes" />
            </div>

            <div className="flex items-center gap-5 text-sm text-slate-500 pb-4 lg:pb-0">
              <span>Last Modified: Sept 24, 2026</span>

              <button className="flex items-center gap-2 hover:text-slate-700 transition">
                <Filter size={15} />
                Filter
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* CONTENT (UNCHANGED BELOW UI STRUCTURE) */}
      <div className="grid grid-cols-1 2xl:grid-cols-[1fr_360px] gap-6">

        {/* LEFT */}
        <div className="space-y-6">

          {/* ABOUT */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-blue-600" />

              <h2 className="text-2xl font-bold text-slate-900">
                About {exhibitor.companyName}
              </h2>
            </div>

            <div className="mt-8 space-y-6 text-slate-600 leading-8 text-[15px]">
              <p>
                {exhibitor.notes || "No description available."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-slate-200">

              <InfoItem label="EMAIL" value={exhibitor.email} />
              <InfoItem label="PHONE" value={exhibitor.phone} />
              <InfoItem label="BOOTH FORMAT" value={exhibitor.boothFormat} />
              <InfoItem label="BOOTH SIZE" value={exhibitor.boothSize} />

            </div>
          </div>

          {/* STRENGTHS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Star size={18} className="text-blue-600" />

              <h2 className="text-2xl font-bold text-slate-900">
                Exhibition Strengths
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {strengths.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* CONTACTS */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                Key Contacts
              </h2>

              <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition">
                <Plus size={16} />
              </button>
            </div>

            <div>
              {contacts.map((item, index) => (
                <div key={index} className="px-5 py-4 border-b border-slate-200">
                  <div className="flex items-center justify-between gap-3">

                    <div className="flex items-center gap-3">

                      <div className="relative">
                        <img
                          src={item.avatar}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${item.status}`} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          {item.role}
                        </p>
                      </div>

                    </div>

                    <div className="flex items-center gap-3">

                      <a href={`mailto:${exhibitor.email}`}>
                        <Mail size={15} />
                      </a>

                      <a href={`tel:${exhibitor.phone}`}>
                        <Phone size={15} />
                      </a>

                    </div>

                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-4 text-sm font-medium text-blue-600 hover:bg-slate-50 transition">
              View all contacts
            </button>

          </div>

          {/* BILLING */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

            <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wide">
              Billing Info
            </h2>

            <div className="mt-6">
              <p className="text-sm text-slate-500">Account Status</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-slate-900">
                  Good Standing
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ExhibitorProfile;

/* Tab */
const Tab = ({ label, active }) => (
  <button className={`px-5 py-5 text-sm font-medium ${active ? "text-slate-900" : "text-slate-500"}`}>
    {label}
  </button>
);

/* StatCard */
const StatCard = ({ icon, value, label, iconStyle }) => (
  <div className="border border-slate-200 rounded-2xl p-5 bg-white">
    <div className={`w-11 h-11 flex items-center justify-center rounded-xl ${iconStyle}`}>
      {icon}
    </div>
    <h3 className="text-4xl font-bold mt-5">{value}</h3>
    <p className="text-xs uppercase font-bold text-slate-500 mt-2">{label}</p>
  </div>
);

/* Info */
const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-xs uppercase font-bold text-slate-400">{label}</p>
    <h3 className="text-base font-semibold mt-3">{value}</h3>
  </div>
);

/* MiniStat (unchanged) */
const MiniStat = ({ label, value, width }) => (
  <div>
    <div className="flex justify-between">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
    <div className="h-3 bg-slate-100 rounded-full mt-2">
      <div className={`h-full bg-blue-600 ${width}`} />
    </div>
  </div>
);