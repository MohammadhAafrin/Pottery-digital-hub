import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SchemeCard from "../components/SchemeCard";

const allSchemes = [
  {
    title: "Startup India Scheme",
    description: "Supports startups with funding, mentorship, and incubation.",
    link: "https://www.startupindia.gov.in/",
    category: "Business",
  },
  {
    title: "Pradhan Mantri Awas Yojana",
    description: "Affordable housing for urban and rural citizens.",
    link: "https://pmaymis.gov.in/",
    category: "Housing",
  },
  {
    title: "Mahatma Gandhi National Rural Employment Guarantee Act",
    description: "Provides employment opportunities in rural areas.",
    link: "https://nrega.nic.in/netnrega/home.aspx",
    category: "Employment",
  },
  {
    title: "PM Vishwakarma Kaushal Samman Yojana",
    description:
      "Aims to support traditional artisans and craftspeople with training, tools, credit, and market access for their skill development and livelihood enhancement.",
    link: "https://pmvishwakarma.gov.in/",
    category: "Employment",
  },
];

const SchemesPage = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Language toggle
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "te" : "en");
  };

  // Filter schemes based on search and category
  const filteredSchemes = allSchemes.filter((scheme) => {
    const matchesSearch = scheme.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-amber-800">
            {t("govt_schemes")}
          </h1>

          {/* ✅ Translate Button */}
          <button
            onClick={toggleLanguage}
            className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition duration-300"
          >
            {i18n.language === "en" ? "తెలుగులో చూపించు" : "Show in English"}
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder={t("search_schemes")}
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-amber-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-amber-600"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">{t("all_categories")}</option>
            <option value="Business">{t("business")}</option>
            <option value="Housing">{t("housing")}</option>
            <option value="Employment">{t("employment")}</option>
            <option value="Agriculture">{t("agriculture")}</option>
          </select>
        </div>

        {/* Schemes Grid */}
        {filteredSchemes.length === 0 ? (
          <p className="text-gray-600 text-center py-20 text-lg">
            {t("no_schemes_found")}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme, index) => (
              <SchemeCard
                key={index}
                title={t(scheme.title)} // ✅ Auto-translate
                description={t(scheme.description)} // ✅ Auto-translate
                link={scheme.link}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SchemesPage;
