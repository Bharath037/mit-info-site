import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = {
    student: { username: "student001", password: "student123", path: "/dashboard/student" },
    staff: { username: "staff001", password: "staff123", path: "/dashboard/staff" },
    admin: { username: "admin001", password: "admin123", path: "/dashboard/admin" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (
      username.trim() === users[role].username &&
      password.trim() === users[role].password
    ) {
      navigate(users[role].path);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-100 px-6">
      <div className="bg-rose-50 rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold text-red-800 mb-6 text-center">MIT Portal Login</h2>

        {/* Role Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          {["student", "staff", "admin"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                role === r
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-white border border-red-300 text-red-700"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-red-700 mb-2">Username</label>
            <input
              type="text"
              placeholder={`Enter your ${role} username`}
              className="w-full px-4 py-3 rounded-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          {/* Password with Eye Toggle */}
          <div className="relative">
            <label className="block text-red-700 mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-red-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-9a9.953 9.953 0 012.175-6M6.75 6.75L3 3m18 18l-3.75-3.75M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Error message */}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-800 hover:bg-red-900 transition rounded-lg font-semibold text-white"
          >
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
