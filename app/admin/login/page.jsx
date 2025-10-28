"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password === "PB@123") {
      document.cookie = "admin-token=secret123; path=/";
      router.push("/admin");
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400">
      <form
        onSubmit={handleLogin}
        className="backdrop-blur-lg bg-white/70 p-8 rounded-2xl shadow-2xl w-96 border border-white/40"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          🔒 Admin Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="border w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Login
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Promozione Branding
        </p>
      </form>
    </div>
  );
}
