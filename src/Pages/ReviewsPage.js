// Reviews.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, Menu, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";

const ReviewsPage = ({ isAuthenticated }) => {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fake loader simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Protected route simulation
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-amber-50">
        <h2 className="text-xl font-semibold text-amber-800">
          ⚠️ Access Denied — Please log in to access Reviews.
        </h2>
      </div>
    );
  }

  // Loader
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-amber-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-800 border-opacity-80"></div>
        <p className="mt-4 text-amber-800 font-semibold">Loading Reviews...</p>
      </div>
    );
  }

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

          {/* Navigation */}
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
                placeholder="Search reviews..."
                className="bg-transparent outline-none ml-2 flex-grow text-sm text-gray-800"
              />
            </div>

            <div className="relative">
              <Bell size={22} className="text-amber-800 cursor-pointer" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1.5 rounded-full">
                2
              </span>
            </div>
          </div>

          {/* Reviews List */}
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard
              name="Sita Devi"
              rating={5}
              comment="Loved the quality and design!"
              date="Nov 2025"
            />
            <ReviewCard
              name="Ravi Kumar"
              rating={4}
              comment="Beautiful craftsmanship and smooth delivery."
              date="Oct 2025"
            />
            <ReviewCard
              name="Lakshmi Rao"
              rating={5}
              comment="Traditional art meets modern elegance."
              date="Sept 2025"
            />
            <ReviewCard
              name="Anjali Sharma"
              rating={4}
              comment="Lovely pottery items, very satisfied!"
              date="Nov 2025"
            />
            <ReviewCard
              name="Arjun Singh"
              rating={5}
              comment="Exceptional quality and fast delivery."
              date="Oct 2025"
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ReviewsPage;
