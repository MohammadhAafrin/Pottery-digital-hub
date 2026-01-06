// components/SchemeCard.jsx
import React from "react";

const SchemeCard = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-700 font-medium hover:underline"
        >
          Learn More
        </a>
      )}
    </div>
  );
};

export default SchemeCard;
