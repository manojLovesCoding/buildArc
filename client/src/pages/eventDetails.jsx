// pages/eventDetails/Booths.jsx

import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Search,
  Download,
  CheckCircle2,
  Plus,
  Filter,
  Move,
  Clock3,
  Settings2,
} from "lucide-react";

const Booths = () => {
  const [selectedTab, setSelectedTab] = useState("floor");

  const exhibitors = [
    {
      name: "Titan Steel Co.",
      category: "Structural",
      size: "36m² req.",
      logo: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "EcoGlass Solutions",
      category: "Glazing",
      size: "18m² req.",
      logo: "https://i.pravatar.cc/100?img=22",
    },
    {
      name: "Nordic Wood",
      category: "Timber",
      size: "54m² req.",
      logo: "https://i.pravatar.cc/100?img=33",
    },
    {
      name: "SmartHome Systems",
      category: "Automation",
      size: "18m² req.",
      logo: "https://i.pravatar.cc/100?img=44",
    },
    {
      name: "Concrete Pro",
      category: "Materials",
      size: "72m² req.",
      logo: "https://i.pravatar.cc/100?img=55",
    },
  ];

  const booths = [
    { id: "A01", name: "Titan\nSteel Co.", occupied: true },
    { id: "A02", name: "Classic\nLTP", occupied: true },
    { id: "A03", empty: true },
    { id: "A04", name: "BuildSafe\nInc.", occupied: true },
    { id: "A05", empty: true },
    { id: "A06", empty: true, premium: true },

    { id: "B01", name: "Ceramic\nMaster", occupied: true },
    { id: "B02", empty: true },
    { id: "B03", empty: true },
    { id: "B04", empty: true },
    { id: "B05", name: "IronWorks", occupied: true },
    { id: "B06", name: "EcoGlass\nSolutions", occupied: true },

    { id: "D01", name: "SolarPoint", occupied: true },
    { id: "D02", name: "GreenRoof", occupied: true },
    { id: "D03", empty: true },
    { id: "D04", empty: true },
    { id: "D05", name: "BrickCo", occupied: true },
    { id: "D06", empty: true },

    { id: "E01", empty: true },
    { id: "E02", name: "PlumbLine", occupied: true },
    { id: "E03", empty: true },
    { id: "E04", name: "LiftTech", occupied: true },
    { id: "E05", empty: true },
    { id: "E06", name: "HVAC\nMasters", occupied: true },
  ];

  const seminars = [
    {
      time: "10:00 AM",
      title: "Future of Sustainable Concrete",
      speaker: "Dr. Sarah Chen",
      hall: "Hall A",
    },
    {
      time: "11:30 AM",
      title: "Smart Grid Integration",
      speaker: "James Wilson",
      hall: "Seminar Room 2",
    },
    {
      time: "02:00 PM",
      title: "BIM in 2025: A Deep Dive",
      speaker: "Elena Rodriguez",
      hall: "Hall A",
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-6 py-5 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <CalendarDays size={26} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Buildarc International Expo 2026
              </h1>

              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <CalendarDays size={14} />
                  Oct 12 - 15, 2026
                </span>

                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  Dubai World Trade Centre
                </span>

                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                  Active Planning
                </span>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-3">
            <button className="h-11 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-2 text-sm font-medium">
              <Download size={16} />
              Export Map
            </button>

            <button className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 size={16} />
              Finalize Layout
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="px-6 border-t border-slate-200 flex items-center gap-8">
          <button
            onClick={() => setSelectedTab("floor")}
            className={`h-14 text-sm font-semibold border-b-2 transition ${
              selectedTab === "floor"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500"
            }`}
          >
            Floor Plan & Allocation
          </button>

          <button
            onClick={() => setSelectedTab("analytics")}
            className={`h-14 text-sm font-semibold border-b-2 transition ${
              selectedTab === "analytics"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500"
            }`}
          >
            Registration & Analytics
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 2xl:grid-cols-[280px_1fr_320px] gap-6">
        {/* LEFT SIDEBAR */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-800 tracking-wide text-sm">
              HOLDING PEN
            </h2>

            <span className="text-sm font-semibold text-slate-500">5</span>
          </div>

          {/* SEARCH */}
          <div className="mt-4 flex items-center gap-3 h-11 rounded-xl border border-slate-200 px-4">
            <Search size={16} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search brands..."
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>

          <p className="mt-6 text-xs font-semibold text-slate-400">
            AWAITING BOOTH ASSIGNMENT
          </p>

          <div className="mt-4 space-y-3">
            {exhibitors.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-3 flex items-center gap-3 hover:border-blue-300 transition cursor-pointer"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-slate-800">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-medium">
                      {item.category}
                    </span>

                    <span className="text-[11px] text-slate-400">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY */}
          <div className="mt-6 border border-dashed border-slate-300 rounded-2xl p-6 text-center">
            <div className="w-8 h-8 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
              !
            </div>

            <p className="text-xs text-slate-400 mt-4 leading-5">
              Exhibitors with paid deposits appear here automatically.
            </p>
          </div>

          <button className="mt-5 w-full h-11 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 transition text-sm font-semibold">
            Invite More Brands
          </button>
        </div>

        {/* CENTER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          {/* TOP BAR */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm border-2 border-blue-500 bg-white"></span>
                Available
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-blue-500"></span>
                Occupied
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-amber-200 border border-amber-300"></span>
                Premium Space
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50">
                <Move size={16} />
              </button>

              <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50">
                <Filter size={16} />
              </button>

              <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50">
                <Settings2 size={16} />
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="mt-8 grid grid-cols-6 gap-3">
            {booths.map((booth, index) => (
              <div
                key={index}
                className={`
                  aspect-square rounded-xl border flex flex-col items-center justify-center text-center p-2 relative transition cursor-pointer
                  ${
                    booth.occupied
                      ? "border-blue-500 bg-blue-50"
                      : booth.premium
                      ? "border-amber-300 bg-amber-50 border-dashed"
                      : "border-slate-200 border-dashed hover:border-blue-300"
                  }
                `}
              >
                <span className="absolute top-2 left-2 text-[10px] font-semibold text-slate-400">
                  {booth.id}
                </span>

                {booth.empty ? (
                  <>
                    <Plus size={18} className="text-slate-300" />

                    <span className="text-[10px] text-slate-300 mt-1">
                      EMPTY
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-9 h-9 rounded-full bg-slate-200 mb-2"></div>

                    <span className="text-[11px] leading-4 font-medium text-blue-700 whitespace-pre-line">
                      {booth.name}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* TIP */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-500 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center">
              ⓘ
            </div>

            Tip: Drag brands from the holding pen directly onto empty booth
            slots.
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* SCHEDULE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-bold tracking-wide text-slate-700">
              SEMINAR SCHEDULE
            </h2>

            <div className="mt-6 space-y-6">
              {seminars.map((item, index) => (
                <div key={index}>
                  <span className="text-[11px] font-bold text-slate-400">
                    {item.time}
                  </span>

                  <h3 className="mt-2 font-semibold text-slate-900 leading-6">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-7 h-7 rounded-full bg-slate-200"></div>

                      {item.speaker}
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                      {item.hall}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 w-full h-11 rounded-xl border border-blue-300 text-blue-600 hover:bg-blue-50 transition text-sm font-semibold flex items-center justify-center gap-2">
              <Plus size={16} />
              Add Session to Schedule
            </button>
          </div>

          {/* OCCUPANCY */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-bold tracking-wide text-slate-700">
              BOOTH OCCUPANCY
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600">Standard Booths</span>

                  <span className="font-semibold text-slate-800">24 / 40</span>
                </div>

                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-[60%] bg-blue-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600">Premium Lounges</span>

                  <span className="font-semibold text-slate-800">8 / 12</span>
                </div>

                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-[70%] bg-amber-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* DEADLINE */}
            <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold text-blue-600">
                    NEXT DEADLINE
                  </p>

                  <p className="text-sm text-blue-900 font-semibold mt-1 leading-6">
                    Booth Pricing Tier 2 starts in 4 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booths;