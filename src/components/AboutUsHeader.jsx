import React from "react";
import about from "../assets/about.png"; 

const AboutUsHeader = () => {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 py-16 md:space-x-4">
      
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:pr-8">
        <p className="text-sm font-bold text-gray-800 mb-2">ABOUT COMPANY</p>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">ABOUT US</h1>
        <p className="text-lg text-gray-600 mb-8">
          We know how large objects will act, but things on a small scale
        </p>
        <button className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-semibold px-6 py-3 rounded">
          Get Quote Now
        </button>
      </div>

      
      <div className="md:w-1/2 w-full flex justify-center md:justify-end">
        <img src={about} alt="About Us" className="w-full max-w-md" />
      </div>
    </section>
  );
};

export default AboutUsHeader;





