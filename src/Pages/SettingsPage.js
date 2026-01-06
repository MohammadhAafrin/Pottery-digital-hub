 import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { X, Menu } from "lucide-react"; // ✅ Import icons
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SettingsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // ✅ Define sidebar state
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-gray-800">
      <Navbar />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } bg-amber-800 text-white transition-all duration-300 flex flex-col`}
        >
          <div className="flex items-center justify-between p-4">
            <h2
              className={`font-bold text-lg transition-all duration-300 overflow-hidden ${
                !sidebarOpen && "w-0 opacity-0"
              }`}
            >
              Digital Hub
            </h2>
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 mt-6 px-2">
            <Link
              to="/"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left"
            >
              <span>🏠</span>
              {sidebarOpen && <span className="text-sm">Dashboard</span>}
            </Link>

            <Link
              to="/products"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left"
            >
              <span>🛍️</span>
              {sidebarOpen && <span className="text-sm">Products</span>}
            </Link>

            <Link
              to="/reviews"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left"
            >
              <span>💬</span>
              {sidebarOpen && <span className="text-sm">Reviews</span>}
            </Link>

            <Link
              to="/orders"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left"
            >
              <span>📦</span>
              {sidebarOpen && <span className="text-sm">Orders</span>}
            </Link>

            <Link
              to="/settings"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left"
            >
              <span>⚙️</span>
              {sidebarOpen && <span className="text-sm">Settings</span>}
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6">
          <h1 className="text-3xl font-bold text-amber-900 mb-6">Settings ⚙️</h1>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">Account Details</h2>

            <form onSubmit={handleSave} className="flex flex-col gap-4">
              {/* Username */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-800 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SettingsPage;
