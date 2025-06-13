
import React from "react";
import testimonial from "../assets/testimonial.png";

const AboutUsTestimonial = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      
      <div className="w-full md:w-1/2 bg-[#2a7cc7] text-white flex flex-col justify-center items-center px-8 py-8 text-center">
        <p className="uppercase tracking-widest text-sm mb-4">Work with us</p>
        <h2 className="text-4xl font-bold mb-6">
          Now Let’s grow <br /> Yours
        </h2>
        <p className="text-base mb-6">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
        </p>
        
        
        <div className="flex justify-center">
          <button className="border border-white px-4 py-2 rounded text-white font-semibold hover:bg-white hover:text-[#2a7cc7] transition">
            Button
          </button>
        </div>
      </div>

      
      <div className="hidden md:block w-full md:w-1/2">
        <img src={testimonial} alt="Testimonial" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default AboutUsTestimonial;




