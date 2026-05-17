import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const assignedUsers = [
  {
    name: "Sarah Chen",
    role: "Sales Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    active: true,
  },
  {
    name: "Marcus Wright",
    role: "Marketing Coordinator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Sales Executive",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

const tags = [
  { label: "High Priority", color: "bg-blue-100 text-blue-700" },
  { label: "VIP", color: "bg-sky-100 text-sky-700" },
  { label: "Architect 2024", color: "bg-blue-600 text-white" },
];

export default function CreateLeadPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    leadType: "",
    source: "",
    email: "",
    phone: "",
    notes: "",
  });

  // INPUT HANDLER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT HANDLER (backend integration)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/api/leads", {
        fullName: formData.fullName,
        company: formData.company,
        leadType: formData.leadType,
        source: formData.source,
        email: formData.email,
        phone: formData.phone,
        notes: formData.notes,
      });

      alert(res.data.message || "Lead created successfully");

      setLoading(false);

      navigate("/lead-management");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Create New Lead
            </h2>
            <p className="text-sm text-gray-500">
              Add a new prospect to Bullard CRM
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Acting as:</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 font-medium text-gray-700">
                Admin
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row">

          {/* Left Form */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jonathan Miller"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Skyline Architects"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Lead Type */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                  Lead Type
                </label>
                <select
                  name="leadType"
                  value={formData.leadType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select type</option>
                  <option>Cold Lead</option>
                  <option>Warm Lead</option>
                  <option>Hot Lead</option>
                </select>
              </div>

              {/* Source */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                  Source
                </label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  placeholder="Referral"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="j.miller@skyline.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 902-3412"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="mt-5">
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                Lead Notes
              </label>

              <textarea
                rows={4}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Interested in the upcoming Global Concrete Summit 2024 exhibition spaces."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Admin Controls */}
            <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-100 p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                  ⚡
                </div>
                <h3 className="font-semibold text-blue-700 text-sm">
                  Admin Controls
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded" />
                  Send automatic welcome email
                </label>

                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded" />
                  Notify regional manager
                </label>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] border-t lg:border-t-0 lg:border-l border-gray-200 bg-gray-50 p-6">

            {/* Assigned User */}
            <div>
              <h4 className="text-xs font-semibold uppercase text-gray-500 mb-3">
                Assigned User
              </h4>

              <div className="space-y-3">
                {assignedUsers.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition ${
                      user.active
                        ? "border-blue-500 bg-white shadow-sm"
                        : "border-transparent hover:bg-white"
                    }`}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-gray-800">
                        {user.name}
                      </h5>
                      <p className="text-xs text-gray-500">{user.role}</p>
                    </div>

                    {user.active && (
                      <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase text-gray-500 mb-3">
                Lead Tags
              </h4>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-gray-600">Follow-up</span>

                <button className="relative w-12 h-6 rounded-full bg-gray-300 transition">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow" />
                </button>
              </div>
            </div>

            {/* Recent Actions */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase text-gray-500">
                  Recent Actions
                </h4>

                <button className="text-gray-400">⌄</button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-gray-400" />
                  <div>
                    <p className="text-sm text-gray-700">
                      Lead structure initialized
                    </p>
                    <p className="text-xs text-gray-400">5 mins ago</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-gray-400" />
                  <div>
                    <p className="text-sm text-gray-700">
                      Sales flow verified
                    </p>
                    <p className="text-xs text-gray-400">2 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Connected to Live Database
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => navigate("/lead-management")}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
            >
              {loading ? "Saving..." : "Save Lead"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}