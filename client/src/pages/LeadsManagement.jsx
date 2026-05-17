import { useEffect, useState } from "react";
import api from "../../api/axios";


export default function LeadsManagement() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/leads");
      setLeads(res.data.leads || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Leads Management
          </h1>
          <p className="text-sm text-slate-500">
            Track and manage your sales pipeline prospects.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border rounded-xl bg-white">
            Import
          </button>
          <button className="px-4 py-2 text-sm border rounded-xl bg-white">
            Export
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-xl">
            + New Lead
          </button>
        </div>

      </div>

      {/* FILTER BAR */}
      <div className="bg-white border rounded-2xl p-4 flex flex-col lg:flex-row gap-3 lg:items-center">

        <input
          placeholder="Search leads, companies, emails..."
          className="flex-1 border rounded-xl px-4 py-2 text-sm"
        />

        <select className="border rounded-xl px-3 py-2 text-sm">
          <option>Lead Type</option>
        </select>

        <select className="border rounded-xl px-3 py-2 text-sm">
          <option>Source</option>
        </select>

        <select className="border rounded-xl px-3 py-2 text-sm">
          <option>Assigned Rep</option>
        </select>

        <button className="px-4 py-2 border rounded-xl text-sm">
          ⚙ More Filters
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-7 gap-4 px-5 py-3 text-xs font-semibold text-slate-500 border-b bg-slate-50">
          <input type="checkbox" />
          <span>Lead Name</span>
          <span>Company</span>
          <span>Type</span>
          <span>Source</span>
          <span>Status</span>
          <span className="text-right">Assigned</span>
        </div>

        {/* ROWS */}
        {loading ? (
          <div className="p-6 text-sm text-slate-500">Loading...</div>
        ) : (
          leads.map((lead) => (
            <div
              key={lead._id}
              className="grid grid-cols-7 gap-4 px-5 py-4 border-b hover:bg-slate-50 items-center"
            >

              {/* checkbox */}
              <input type="checkbox" />

              {/* NAME */}
              <div>
                <p className="font-medium text-slate-900">
                  {lead.fullName}
                </p>
                <p className="text-xs text-slate-400">
                  {lead.email}
                </p>
              </div>

              {/* COMPANY */}
              <div className="text-sm text-slate-700">
                {lead.company}
              </div>

              {/* TYPE */}
              <div>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                  {lead.leadType || "Cold"}
                </span>
              </div>

              {/* SOURCE */}
              <div className="text-sm text-slate-600">
                {lead.source}
              </div>

              {/* STATUS */}
              <div>
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  {lead.status || "New"}
                </span>
              </div>

              {/* ASSIGNED + ACTION */}
              <div className="flex items-center justify-end gap-3">

                <span className="text-sm text-slate-600">
                  Sarah Chen
                </span>

                <button className="text-slate-400 hover:text-slate-600">
                  ⋯
                </button>

              </div>
            </div>
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between text-sm">

        <p className="text-slate-500">
          Showing {leads.length} of {leads.length} leads
        </p>

        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-xl">Previous</button>
          <button className="px-3 py-1 border rounded-xl bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded-xl">2</button>
          <button className="px-3 py-1 border rounded-xl">Next</button>
        </div>

      </div>

    </div>
  );
}