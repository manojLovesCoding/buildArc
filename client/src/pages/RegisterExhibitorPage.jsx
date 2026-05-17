import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function RegisterExhibitorPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    headquarters: "",
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    boothFormat: "",
    boothSize: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/api/exhibitors", {
        companyName: formData.companyName,
        industry: formData.industry,
        website: formData.website,
        headquarters: formData.headquarters,
        fullName: formData.fullName,
        jobTitle: formData.jobTitle,
        email: formData.email,
        phone: formData.phone,
        boothFormat: formData.boothFormat,
        boothSize: formData.boothSize,
        notes: formData.notes,
      });

      alert(
        res.data.message || "Exhibitor registered successfully"
      );

      setLoading(false);

      navigate("/exhibitors");

    } catch (error) {
      setLoading(false);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Register New Exhibitor
            </h2>

            <p className="text-sm text-gray-500">
              Create and manage exhibitor onboarding records.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/exhibitors")}
              className="px-4 py-2 rounded-xl border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
            >
              {loading ? "Saving..." : "Save Exhibitor"}
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col xl:flex-row">

          {/* Main Form */}
          <div className="flex-1 p-6">

            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs">
                  ■
                </div>

                <h3 className="font-semibold text-gray-800">
                  Company Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Global Tech Exhibitions"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Industry
                  </label>

                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Industry</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Construction</option>
                    <option>Marketing</option>
                  </select>
                </div>

                {/* Website */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Website URL
                  </label>

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* HQ */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Headquarters Address
                  </label>

                  <input
                    type="text"
                    name="headquarters"
                    value={formData.headquarters}
                    onChange={handleChange}
                    placeholder="City, Country"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Primary Contact */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs">
                  ■
                </div>

                <h3 className="font-semibold text-gray-800">
                  Primary Contact
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Contact person name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Job Title
                  </label>

                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Marketing Executive"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Participation Details */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs">
                  ■
                </div>

                <h3 className="font-semibold text-gray-800">
                  Participation Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Booth Format */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Booth Format
                  </label>

                  <select
                    name="boothFormat"
                    value={formData.boothFormat}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose an option</option>
                    <option>Standard Booth</option>
                    <option>Premium Booth</option>
                    <option>Custom Booth</option>
                  </select>
                </div>

                {/* Booth Size */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                    Preferred Booth Size
                  </label>

                  <select
                    name="boothSize"
                    value={formData.boothSize}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Booth Size</option>
                    <option>10 x 10</option>
                    <option>10 x 20</option>
                    <option>20 x 20</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-5">
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                  Internal Notes
                </label>

                <textarea
                  rows={4}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Special requirements, booth details, registration notes..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Upload Area */}
              <div className="mt-5 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 p-10 text-center">
                <div className="text-4xl mb-2">☁️</div>

                <h4 className="text-sm font-medium text-gray-700">
                  Upload Product Catalog / Marketing Materials
                </h4>

                <p className="text-xs text-gray-400 mt-1">
                  PDF, DOCX or ZIP up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[320px] border-t xl:border-t-0 xl:border-l border-gray-200 bg-gray-50 p-6">

            {/* Preview */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-600 px-5 py-4 text-white">
                <h3 className="font-semibold">Live Profile Preview</h3>
              </div>

              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl text-gray-400">
                    🏢
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {formData.companyName || "Brand Name"}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {formData.industry || "Industry"}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {formData.website || "website.com"}
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Primary Contact</span>

                    <span className="font-medium text-gray-700">
                      Pending
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Assigned Booth</span>

                    <span className="font-medium text-gray-700">
                      Not Assigned
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Requested Space</span>

                    <span className="font-medium text-gray-700">
                      {formData.boothSize || "10 x 10 Booth"}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-500">
                      Profile Completion
                    </span>

                    <span className="text-blue-600 font-medium">
                      65%
                    </span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="w-[65%] h-full bg-blue-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Assigned Manager */}
            <div className="mt-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h4 className="text-sm font-semibold text-gray-800 mb-4">
                Assigned Account Manager
              </h4>

              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                  alt="manager"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h5 className="font-medium text-gray-800">
                    Alex Thompson
                  </h5>

                  <p className="text-xs text-gray-500">
                    Senior Sales Coordinator
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Connected to Live Database
          </div>

          <p className="text-xs text-gray-400">
            © 2024 Bullard CRM. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}