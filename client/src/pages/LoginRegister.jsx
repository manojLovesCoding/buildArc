// LoginRegister.jsx
import { useState } from "react";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-3 sm:px-4 py-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            {isLogin ? "System Login" : "Create Account"}
          </h1>

          <p className="text-center text-gray-500 mt-2 text-xs sm:text-sm leading-relaxed">
            {isLogin
              ? "Enter your corporate credentials to access the dashboard"
              : "Register your account to get started"}
          </p>

          {/* Form */}
          <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 uppercase mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 uppercase mb-2">
                Work Email
              </label>

              <input
                type="email"
                placeholder="admin@buildarc.com"
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2 gap-2">
                <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 uppercase">
                  Password
                </label>

                {isLogin && (
                  <button
                    type="button"
                    className="text-xs sm:text-sm text-blue-600 hover:underline whitespace-nowrap"
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 uppercase mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Remember */}
            {isLogin && (
              <div className="flex items-start sm:items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="mt-1 sm:mt-0 h-4 w-4 text-blue-600 rounded"
                />

                <label
                  htmlFor="remember"
                  className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                >
                  Remember this device for 30 days
                </label>
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base"
            >
              {isLogin ? "Sign In to Buildarc" : "Create Account"}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 px-4 sm:px-6 md:px-8 py-4 sm:py-5">
          <div className="space-y-3">
            <div className="bg-white border rounded-lg p-3">
              <h3 className="font-semibold text-sm text-gray-800">
                Administrators
              </h3>

              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Full control over event floor plans, booth allocations, and
                user permissions.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-3">
              <h3 className="font-semibold text-sm text-gray-800">
                Sales & Marketing
              </h3>

              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Manage leads, update exhibitor profiles, and track sales
                pipeline progress.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-3">
              <h3 className="font-semibold text-sm text-gray-800">
                Reporting / Viewers
              </h3>

              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Access analytics dashboards and historical event performance
                data.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-gray-500 py-4 px-4">
          <button className="hover:text-blue-600 transition">
            Help Center
          </button>

          <button className="hover:text-blue-600 transition">
            Security Policy
          </button>

          <button className="hover:text-blue-600 transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}