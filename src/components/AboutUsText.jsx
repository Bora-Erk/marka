import React from "react";

const AboutUsText = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto px-4 py-12 gap-8">
      
      <div className="md:w-1/2">
        <p className="text-red-500 text-sm mb-2">Problems trying</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#252B42] leading-snug">
          Met minim Mollie non desert <br />
          Alamo est sit cliquey dolor do <br />
          met sent.
        </h2>
      </div>

      
      <div className="md:w-1/2 text-[#737373] text-base leading-relaxed">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </div>
    </div>
  );
};

export default AboutUsText;
