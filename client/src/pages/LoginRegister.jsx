// LoginRegister.jsx
import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      setLoading(true);

      // REGISTER
      if (!isLogin) {
        if (formData.password !== formData.confirmPassword) {
          return setMessage("Passwords do not match");
        }

        const { data } = await api.post("/api/auth/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        // save token
        localStorage.setItem("token", data.token);

        setMessage(data.message);

        navigate("/dashboard");
        console.log("REGISTER SUCCESS:", data);

        // optional redirect
        // navigate("/dashboard");
      }

      // LOGIN
      else {
        const { data } = await api.post("/api/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        // save token
        localStorage.setItem("token", data.token);

        setMessage(data.message);

        navigate("/dashboard");
        console.log("LOGIN SUCCESS:", data);

        // optional redirect
        // navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);

      setMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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

          {/* message */}
          {message && (
            <div className="mt-4 text-center text-sm font-medium text-blue-600">
              {message}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 sm:mt-8 space-y-4 sm:space-y-5"
          >
            {/* Name */}
            {!isLogin && (
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-gray-600 uppercase mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@buildarc.com"
                required
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
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
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base disabled:opacity-50"
            >
              {loading
                ? "Please wait..."
                : isLogin
                  ? "Sign In to Buildarc"
                  : "Create Account"}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
              }}
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
