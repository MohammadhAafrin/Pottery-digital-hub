// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Pages/i18n"; // ✅ Correct import

// Pages
import Dashboard from "./Pages/Dashboard";
import SettingsPage from "./Pages/SettingsPage";
import OrdersPage from "./Pages/Orders";
import ReviewsPage from "./Pages/ReviewsPage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Trolly from "./Pages/Trolly";
import SchemesPage from "./Pages/SchemesPage";

function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard isAuthenticated={isAuthenticated} />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/orders"
          element={<OrdersPage isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/reviews"
          element={<ReviewsPage isAuthenticated={isAuthenticated} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={<Products isAuthenticated={isAuthenticated} />}
        />
        <Route path="/trolly" element={<Trolly />} />
        <Route path="/schemes" element={<SchemesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
