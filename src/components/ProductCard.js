import React from "react";

function ProductCard({ image, title, description, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden w-72">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-bold text-lg">₹{price}</span>
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
