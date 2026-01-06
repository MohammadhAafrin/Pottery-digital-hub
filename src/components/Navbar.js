import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [cartCount] = useState(3); // Example count
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "te" : "en");
  };

  return (
    <nav className="bg-amber-800 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo / Title */}
      <div className="font-bold text-lg">Digital Hub</div>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/" className="hover:text-amber-200">{t("home")}</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-amber-200">{t("about")}</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-amber-200">{t("contact")}</Link>
        </li>
        <li className="relative">
          <Link to="/trolly" className="hover:text-amber-200">
            🛒 {t("trolley")}
          </Link>
          {/* Cart count badge */}
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 rounded-full">
            {cartCount}
          </span>
        </li>
      </ul>

      {/* Language Switch Button */}
      <button
        onClick={toggleLanguage}
        className="bg-white text-amber-800 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-amber-100 ml-4"
      >
        {t("switch_language")}
      </button>
    </nav>
  );
};

export default Navbar;
