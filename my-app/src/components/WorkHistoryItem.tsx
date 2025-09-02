// components/WorkHistoryItem.tsx
import React from "react";

export default function WorkHistoryItem({
  role,
  company,
  location,
  type,
  date,
  points,
}: {
  role: string;
  company: string;
  location: string;
  type: string;
  date: string;
  points: string[];
}) {
  return (
    <div className="relative mb-6">
      {/* The yellow circle, positioned to the left and centered vertically with the role text */}

      {/* Main content container */}
      <div>
        {/* Job Title and Details */}
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold">{role}</h3>
          <div className="absolute -left-[30px] w-3 h-3 rounded-full bg-yellow-500"></div>
        </div>

        <span className="text-gray-400 absolute -left-[-10px]">
          {company} • {location} • {type}
        </span>
        <br />
        {/* Date */}
        <p className="text-gray-400 text-sm mb-2 absolute -left-[-10px]">
          {date}
        </p>
        <br />
        {/* Bullet Points */}
        <ul className="list-disc list-inside mt-2 text-gray-300 ml-4 text-left">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
