 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, Menu, X, MessageCircle, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import SchemeCard from "../components/SchemeCard";

// Move initialProducts outside to avoid ESLint warning
const initialProducts = [
  {
    id: 1,
    image:
      "https://i.etsystatic.com/47070131/r/il/3cf339/5617703815/il_570xN.5617703815_iips.jpg",
    title: "Clay Flower Vase",
    description:
      "Elegant hand-thrown vase with a smooth matte finish — perfect for décor or fresh blooms.",
    price: 850,
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/11/465858387/DX/FE/WI/67521543/red-terracotta-tea-set-500x500.jpg",
    title: "Terracotta Tea Set",
    description:
      "Rustic-style tea set crafted from natural terracotta clay for a traditional touch.",
    price: 1250,
    rating: 4,
  },
  {
    id: 3,
    image:
      "http://villagedecor.in/cdn/shop/files/Clay-Water-Jug-Traditional-Lifestyle_View_HDJ1011.jpg",
    title: "Earthen Water Jug",
    description:
      "Keep your drinks naturally cool with this eco-friendly earthen water jug.",
    price: 950,
    rating: 4,
  },
  {
    id: 4,
    image: "https://lillieceramics.com/cdn/shop/products/DSC_0748.jpg?v=1590604181",
    title: "Decorative Ceramic Bowl",
    description:
      "Hand-crafted ceramic bowl made by skilled potters, perfect for fruits or décor.",
    price: 1250,
    rating: 5,
  },
  {
    id: 5,
    image: "https://mittify.com/wp-content/uploads/2024/10/415Zkn4EBUL._SL1080_.jpg",
    title: "Handcrafted Clay Lamp",
    description:
      "Traditional diya‑style clay lamp with intricate carvings — perfect for festivities.",
    price: 1399,
    rating: 5,
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/81Tgbp-iDLL._AC_UF894,1000_QL80_.jpg",
    title: "Handcrafted Terracotta Coffee Mug Set",
    description: "Rustic clay mugs (set of 2) with natural earthy texture.",
    price: 499,
    rating: 4,
  },
];

// Government schemes data
const schemes = [
  {
    id: 1,
    title: "Artisan Welfare Scheme",
    description: "Financial aid and skill development for local potters and artisans.",
    link: "https://www.example.com/artisan-scheme",
  },
  {
    id: 2,
    title: "Clay Export Promotion Scheme",
    description: "Support for exporting handcrafted pottery internationally.",
    link: "https://www.example.com/export-scheme",
  },
  {
    id: 3,
    title: "Green Pottery Initiative",
    description: "Promoting eco-friendly pottery and sustainable clay practices.",
    link: "https://www.example.com/green-pottery",
  },
];

const Dashboard = ({ isAuthenticated }) => {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Load products once
  useEffect(() => {
    setProducts(initialProducts);
    setFilteredProducts(initialProducts);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Search products
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  // Filter products
  const handleFilter = (type) => {
    let sorted = [...filteredProducts];
    if (type === "priceLowHigh") sorted.sort((a, b) => a.price - b.price);
    else if (type === "priceHighLow") sorted.sort((a, b) => b.price - a.price);
    else if (type === "rating4") sorted = sorted.filter((p) => p.rating >= 4);
    setFilteredProducts(sorted);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-amber-50">
        <h2 className="text-xl font-semibold text-amber-800">
          ⚠️ Access Denied — Please log in to access the Dashboard.
        </h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-amber-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-800 border-opacity-80"></div>
        <p className="mt-4 text-amber-800 font-semibold">Loading Dashboard...</p>
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

          <nav className="flex flex-col gap-2 mt-6 px-2">
            <Link to="/" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>🏠</span>
              {sidebarOpen && <span className="text-sm">Dashboard</span>}
            </Link>
            <Link to="/products" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>🛍️</span>
              {sidebarOpen && <span className="text-sm">Products</span>}
            </Link>
            <Link to="/schemes" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>📜</span>
              {sidebarOpen && <span className="text-sm">Schemes</span>}
            </Link>
            <Link to="/reviews" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>💬</span>
              {sidebarOpen && <span className="text-sm">Reviews</span>}
            </Link>
            <Link to="/orders" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
              <span>📦</span>
              {sidebarOpen && <span className="text-sm">Orders</span>}
            </Link>
            <Link to="/settings" className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-700 transition w-full text-left">
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
                placeholder="Search pottery products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex gap-4">
              <button onClick={() => handleFilter("priceLowHigh")} className="bg-amber-700 text-white px-4 py-2 rounded-md">
                Price: Low to High
              </button>
              <button onClick={() => handleFilter("priceHighLow")} className="bg-amber-700 text-white px-4 py-2 rounded-md">
                Price: High to Low
              </button>
              <button onClick={() => handleFilter("rating4")} className="bg-amber-700 text-white px-4 py-2 rounded-md">
                Rating 4+ ⭐
              </button>
              <button onClick={() => setFilteredProducts(products)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
                Reset
              </button>
            </div>
          )}

          {/* Banner */}
          <section className="bg-amber-200 text-center py-10 px-6 shadow-inner rounded-2xl mb-8">
            <h1 className="text-3xl font-bold text-amber-900">Welcome to the Pottery Digital Hub 🏺</h1>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
              Empowering artisans through digital innovation — explore, connect, and grow your pottery business.
            </p>
          </section>

          {/* Products */}
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>

          {/* Schemes */}
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Government Schemes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {schemes.map((scheme) => (
              <SchemeCard key={scheme.id} title={scheme.title} description={scheme.description} link={scheme.link} />
            ))}
          </div>

          {/* Reviews */}
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard name="Sita Devi" rating={5} comment="Loved the quality and design!" date="Nov 2025" />
            <ReviewCard name="Ravi Kumar" rating={4} comment="Beautiful craftsmanship and smooth delivery." date="Oct 2025" />
            <ReviewCard name="Lakshmi Rao" rating={5} comment="Traditional art meets modern elegance." date="Sept 2025" />
          </div>
        </main>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <button onClick={() => setChatOpen(!chatOpen)} className="bg-amber-700 text-white p-3 rounded-full shadow-lg hover:bg-amber-800">
          <MessageCircle size={24} />
        </button>
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-72 bg-white border border-gray-300 rounded-lg shadow-lg p-3">
            <h3 className="text-lg font-semibold text-amber-800 border-b pb-2">Chat Support 💬</h3>
            <div className="h-40 overflow-y-auto mt-2 text-sm text-gray-700">
              <p className="bg-gray-100 p-2 rounded mb-1">Hello! How can we help?</p>
            </div>
            <input type="text" placeholder="Type your message..." className="mt-2 w-full border rounded-md p-2 text-sm outline-none" />
            <button className="bg-amber-700 text-white px-3 py-1 mt-2 rounded-md w-full hover:bg-amber-800 transition">Send</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
