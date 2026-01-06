import React from "react";

function Footer() {
  return (
    <footer className="bg-amber-800 text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Pottery Digital Hub. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-2">
          <a
            href="#privacy"
            className="hover:underline hover:text-gray-300 transition"
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="hover:underline hover:text-gray-300 transition"
          >
            Terms
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
