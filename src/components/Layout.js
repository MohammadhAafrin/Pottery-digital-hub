// Layout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bell, MessageCircle, Filter, Search } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-gray-800">
      {/* Navbar */}
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
          {/* Search + Notifications */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center bg-amber-100 rounded-lg px-3 py-2 w-80">
              <Search size={18} className="text-amber-700" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-2 flex-grow text-sm text-gray-800"
              />
            </div>

            <div className="relative flex gap-4">
              <button
                onClick={() => setFilterVisible(!filterVisible)}
                className="bg-amber-700 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-amber-800"
              >
                <Filter size={16} /> Filter
              </button>

              <div className="relative">
                <Bell size={22} className="text-amber-800 cursor-pointer" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1.5 rounded-full">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {filterVisible && (
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-2">Filter Options</h3>
              <div className="flex gap-4">
                <button className="bg-amber-700 text-white px-4 py-2 rounded-md">
                  Option 1
                </button>
                <button className="bg-amber-700 text-white px-4 py-2 rounded-md">
                  Option 2
                </button>
              </div>
            </div>
          )}

          {/* Children content (page-specific content) */}
          {children}
        </main>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-amber-700 text-white p-3 rounded-full shadow-lg hover:bg-amber-800"
        >
          <MessageCircle size={24} />
        </button>
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-72 bg-white border border-gray-300 rounded-lg shadow-lg p-3">
            <h3 className="text-lg font-semibold text-amber-800 border-b pb-2">
              Chat Support 💬
            </h3>
            <div className="h-40 overflow-y-auto mt-2 text-sm text-gray-700">
              <p className="bg-gray-100 p-2 rounded mb-1">Hello! How can we help?</p>
            </div>
            <input
              type="text"
              placeholder="Type your message..."
              className="mt-2 w-full border rounded-md p-2 text-sm outline-none"
            />
            <button className="bg-amber-700 text-white px-3 py-1 mt-2 rounded-md w-full hover:bg-amber-800 transition">
              Send
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
