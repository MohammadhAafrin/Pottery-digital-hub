import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-amber-200 py-16 text-center shadow-inner">
        <h1 className="text-4xl font-bold text-amber-900 mb-3">
          About Us — The Digital Hub for Pottery Craftsmen 🏺
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          We bridge the gap between tradition and technology, empowering local
          pottery artisans to showcase their art globally through digital innovation.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Our mission is to support traditional pottery craftsmen by giving them
          access to modern digital tools, online marketplaces, and skill-building
          programs. We aim to enhance visibility, increase income opportunities,
          and preserve the cultural heritage of handmade pottery.
        </p>
      </section>

      {/* Heritage Section */}
      <section className="py-12 px-6 bg-amber-100 shadow-inner">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://i.etsystatic.com/15069502/r/il/3eeb4d/5810844511/il_fullxfull.5810844511_6mrp.jpg"
            alt="Traditional Pottery"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-3">
              Preserving Heritage Through Innovation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Pottery is more than craft — it’s a reflection of culture and
              creativity passed down through generations. Our platform ensures
              these time-honored traditions are sustained in the digital era.
              By connecting artisans with a wider audience, we celebrate the art
              of clay and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">Meet Our Team 🤝</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              alt="Founder"
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="font-semibold text-lg text-amber-800">Mahanthi Peetha</h3>
            <p className="text-gray-600 text-sm">Founder & Project Lead</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333605.png"
              alt="Designer"
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="font-semibold text-lg text-amber-800">Ravi Kumar</h3>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333602.png"
              alt="Developer"
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="font-semibold text-lg text-amber-800">Sita Devi</h3>
            <p className="text-gray-600 text-sm">Backend Developer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-200 py-10 text-center mt-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-2">
          Join Our Pottery Community 🌿
        </h2>
        <p className="text-gray-700 mb-4">
          Be part of the change — sell, learn, and grow with the Digital Hub.
        </p>
        <a
          href="/register"
          className="bg-amber-800 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
