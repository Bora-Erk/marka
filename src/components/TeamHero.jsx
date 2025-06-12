import React from "react";

const TeamHero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      
      <div className="md:w-1/2 w-full">
        <img
          src="src/assets/Team1.png" 
          alt="Main Hero"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="md:w-1/2 w-full grid grid-cols-2 grid-rows-2 gap-2 p-2">
        <img
          src="src/assets/Team2.png"
          alt="Eco Aware Coat"
          className="w-full h-full object-cover"
        />
        <img
          src="src/assets/Team3.png"
          alt="Light Denim Jacket"
          className="w-full h-full object-cover"
        />
        <img
          src="src/assets/Team3.png"
          alt="Black Sweater"
          className="w-full h-full object-cover"
        />
        <img
          src="src/assets/Team4.png"
          alt="Blue Denim Jacket"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TeamHero;
