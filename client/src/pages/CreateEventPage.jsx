import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function CreateEventPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    eventType: "",
    capacity: "",
    visibility: true,
    registrationOpen: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // API CALL
      const res = await api.post("/api/events", {
        eventName: formData.eventName,
        description: formData.description,
        eventType: formData.eventType,
        capacity: formData.capacity,
        visibility: formData.visibility,
        registrationOpen: formData.registrationOpen,
      });

      alert(
        res.data.message || "Event Created Successfully"
      );

      setLoading(false);

      navigate("/events");

    } catch (error) {
      setLoading(false);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-5">
      <div className="max-w-[1600px] mx-auto">

        {/* Top Header */}
        <div className="flex items-center justify-between mb-5">

          <div>
            <p className="text-xs text-gray-400">
              Events &gt; Create New Event
            </p>

            <h1 className="text-2xl font-semibold text-gray-900 mt-1">
              Create Event
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm hover:bg-gray-50"
            >
              ✕ Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
            >
              {loading ? "Saving..." : "💾 Save Event"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* Tabs */}
            <div className="bg-white rounded-xl border border-gray-200 p-2 flex items-center gap-2">
              {[
                "General Info",
                "Venue & Tickets",
                "Exhibitors",
                "Schedule",
              ].map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm transition ${
                    index === 0
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Basic Details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Basic Details
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Fundamental information about your event.
                </p>
              </div>

              <div className="space-y-5">

                {/* Event Name */}
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                    Event Name
                  </label>

                  <input
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    placeholder="TechGlobal Expo 2024"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                    Description
                  </label>

                  <textarea
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="The premier gathering for technology innovators and industry leaders."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Type & Capacity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                      Event Type
                    </label>

                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Conference</option>
                      <option>Conference</option>
                      <option>Expo</option>
                      <option>Workshop</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-gray-500 mb-2">
                      Capacity
                    </label>

                    <input
                      type="number"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      placeholder="500"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

              </div>
            </div>

            {/* Media Banner */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">

              <div className="mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  Media & Banner
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Upload high-quality imagery for the event page.
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-2xl h-[250px] bg-gray-50 flex flex-col items-center justify-center text-center">

                <div className="text-3xl mb-3">🖼️</div>

                <h4 className="text-sm font-medium text-gray-700">
                  Click to upload or drag and drop
                </h4>

                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG or WEBP (max 10MB)
                </p>

              </div>

            </div>

            {/* Event Settings */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">

              <div className="mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  Event Settings
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Visibility */}
                <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">

                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Public Visibility
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      Allow event to be visible publicly
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="visibility"
                      checked={formData.visibility}
                      onChange={handleChange}
                      className="sr-only peer"
                    />

                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>

                </div>

                {/* Registration */}
                <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">

                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      Registration Open
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      Allow users to book tickets
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="registrationOpen"
                      checked={formData.registrationOpen}
                      onChange={handleChange}
                      className="sr-only peer"
                    />

                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-5">

            {/* Event Preview */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

              <div className="h-[180px] bg-gradient-to-r from-[#071b2e] to-[#0e3558] relative flex items-center justify-center">

                <div className="absolute inset-0 bg-black/20" />

                <div className="relative z-10 text-center text-white px-5">
                  <p className="text-xs uppercase tracking-widest text-blue-200">
                    Premium Event
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    {formData.eventName || "TechGlobal Expo 2024"}
                  </h2>
                </div>

              </div>

              <div className="p-5">

                <div className="space-y-4 text-sm">

                  <div className="flex items-start gap-3">
                    <span>📅</span>

                    <div>
                      <p className="font-medium text-gray-800">
                        Nov 15 - 17, 2024
                      </p>

                      <p className="text-gray-500 text-xs">
                        Innovation Center
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span>📍</span>

                    <div>
                      <p className="font-medium text-gray-800">
                        Innovation Center
                      </p>

                      <p className="text-gray-500 text-xs">
                        123 Tech Avenue, Silicon Valley, CA
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-6">

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Registration Progress
                    </span>

                    <span className="text-xs text-gray-400">
                      0 / 5000
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-[15%] h-full bg-blue-600 rounded-full" />
                  </div>

                </div>

                <button className="mt-6 w-full border border-gray-300 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition">
                  👁 View Live Portal
                </button>

              </div>

            </div>

            {/* Notes */}
            <div className="bg-[#f2f8ff] border border-[#d7e8ff] rounded-xl p-5">
              <h3 className="text-sm font-semibold text-blue-700 mb-3">
                ORGANIZER NOTES
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Internal notes for the organizing team...
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
          <p>
            © 2024 Bullard CRM. Convention Industry Trade Exhibition Platform.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-green-600">
              ● System Online
            </span>

            <span>47.6 ms latency</span>
          </div>
        </div>

      </div>
    </div>
  );
}