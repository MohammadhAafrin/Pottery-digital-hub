import React from "react";
import { StarIcon } from "lucide-react";

const ReviewCard = ({ name, rating, comment, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 hover:shadow-lg transition">
      {/* Reviewer Name */}
      <h3 className="font-semibold text-amber-800">{name}</h3>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-gray-500 text-sm ml-2">{rating}/5</span>
      </div>

      {/* Comment */}
      <p className="text-gray-700 text-sm">{comment}</p>

      {/* Date */}
      <span className="text-gray-400 text-xs">{date}</span>
    </div>
  );
};

export default ReviewCard;

