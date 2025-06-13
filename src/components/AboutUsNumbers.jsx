import React from "react";

const stats = [
  { number: "15K", label: "Happy Customers" },
  { number: "150K", label: "Monthly Visitors" },
  { number: "15", label: "Countries  Worldwide" },
  { number: "100+", label: "Top Partners" },
];

const AboutUsNumbers = () => {
  return (
    <div className="flex flex-wrap justify-center gap-50 py-12 px-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-[#1E2235]">
            {stat.number}
          </span>
          <span className="mt-2 text-gray-500 font-semibold text-center">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AboutUsNumbers;
