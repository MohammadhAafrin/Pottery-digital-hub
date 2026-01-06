import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <section className="bg-amber-200 py-16 text-center shadow-inner">
        <h1 className="text-4xl font-bold text-amber-900 mb-3">
          Contact Us 📞
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          Have a question, suggestion, or partnership inquiry?  
          We'd love to hear from you — our team will get back to you soon!
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto p-8 md:p-12 w-full">
        {/* Contact Information */}
        <div className="flex-1 bg-amber-100 rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-amber-800" size={22} />
              <span>support@digitalhubpottery.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-amber-800" size={22} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-amber-800" size={22} />
              <span>Gudlavalleru, Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              Working Hours ⏰
            </h3>
            <p className="text-gray-700">
              Monday – Saturday: 9:00 AM – 6:00 PM <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Send Us a Message
          </h2>
          {submitted ? (
            <div className="bg-green-100 text-green-700 p-3 rounded-md text-center mb-4">
              ✅ Thank you for reaching out! We’ll get back to you shortly.
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-700"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-700"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-700 resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-amber-800 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-amber-900 transition w-full"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-6 mb-12 max-w-6xl mx-auto px-4">
        <iframe
          title="Pottery Hub Location"
          className="w-full h-72 rounded-2xl shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.147747470535!2d81.04386447504255!3d16.36899318432968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37e9f0560e9a77%3A0x5c5e4b1c53d96b33!2sGudlavalleru%20Engineering%20College!5e0!3m2!1sen!2sin!4v1706789459820!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
