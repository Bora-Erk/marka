import React from "react";

const Popular = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full min-h-screen">
      
      
      <div className="lg:w-1/2 w-full h-full">
        <img
          src="src/assets/most-popular-girl.png" 
          alt="Girl holding burger"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="lg:w-1/2 w-full bg-gray-50 flex flex-col items-center justify-center px-10 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">MOST POPULAR</h2>
        <p className="text-gray-600 mb-6 max-w-sm">
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </p>
        <img
          src="src/assets/caramel.png" 
          alt="Caramel Cashew"
          className="w-52 mb-4"
        />
        <h3 className="font-semibold text-gray-800">English Department</h3>
        <p className="text-gray-500 text-sm mb-1">15 Sales</p>
        <div className="mb-2">
          <span className="line-through text-gray-400 mr-2">$16.48</span>
          <span className="text-green-600 font-semibold">$6.48</span>
        </div>
        <div className="flex space-x-2 justify-center">
          <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
          <span className="w-3 h-3 rounded-full bg-blue-700"></span>
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span className="w-3 h-3 rounded-full bg-gray-900"></span>
        </div>
      </div>
    </div>
  );
};

export default Popular;

