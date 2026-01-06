 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, X, Search } from "lucide-react";
import Navbar from "../components/Navbar"; // default export
import Footer from "../components/Footer"; // default export

const Orders = ({ isAuthenticated }) => {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Example orders
  const orders = [
    { id: "#ORD001", product: "Clay Flower Vase", date: "2025-11-01", status: "Delivered", amount: "₹850" },
    { id: "#ORD002", product: "Terracotta Tea Set", date: "2025-11-03", status: "Pending", amount: "₹1250" },
    { id: "#ORD003", product: "Earthen Water Jug", date: "2025-11-05", status: "Shipped", amount: "₹950" },
    { id: "#ORD004", product: "Decorative Ceramic Bowl", date: "2025-11-06", status: "Delivered", amount: "₹1150" },
  ];

  // Filtered orders based on search
  const filteredOrders = orders.filter((order) =>
    order.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-amber-50">
        <h2 className="text-xl font-semibold text-amber-800">
          ⚠️ Access Denied — Please log in to access Orders.
        </h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-amber-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-800 border-opacity-80"></div>
        <p className="mt-4 text-amber-800 font-semibold">Loading Orders...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-gray-800">
      <Navbar />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? "w-64" : "w-16"} bg-amber-800 text-white transition-all duration-300 flex flex-col`}>
          <div className="flex items-center justify-between p-4">
            <h2 className={`font-bold text-lg transition-all duration-300 overflow-hidden ${!sidebarOpen ? "w-0 opacity-0" : ""}`}>
              Digital Hub
            </h2>
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-6 px-2">
            <Link to="/" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>🏠</span>{sidebarOpen && <span className="text-sm">Dashboard</span>}
            </Link>
            <Link to="/products" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>🛍️</span>{sidebarOpen && <span className="text-sm">Products</span>}
            </Link>
            <Link to="/reviews" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>💬</span>{sidebarOpen && <span className="text-sm">Reviews</span>}
            </Link>
            <Link to="/orders" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>📦</span>{sidebarOpen && <span className="text-sm">Orders</span>}
            </Link>
            <Link to="/settings" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>⚙️</span>{sidebarOpen && <span className="text-sm">Settings</span>}
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6">
          {/* Search + Notification */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center bg-amber-100 rounded-lg px-3 py-2 w-80">
              <Search size={18} className="text-amber-700" />
              <input
                type="text"
                placeholder="Search orders..."
                className="bg-transparent outline-none ml-2 flex-grow text-sm text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Bell size={22} className="text-amber-800 cursor-pointer" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1.5 rounded-full">2</span>
            </div>
          </div>

          {/* Orders Table */}
          <h1 className="text-3xl font-bold text-amber-900 mb-6">Orders 📦</h1>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-md p-4">
            {filteredOrders.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-amber-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-amber-900">Order ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-amber-900">Product</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-amber-900">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-amber-900">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-amber-900">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                      <td className="px-6 py-4 text-sm">{order.product}</td>
                      <td className="px-6 py-4 text-sm">{order.date}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          order.status === "Delivered" ? "bg-green-100 text-green-800"
                          : order.status === "Pending" ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-600 mt-10">
                No orders found for "<span className="font-semibold">{searchTerm}</span>"
              </p>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
