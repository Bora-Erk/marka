import React from "react";

const MostPopular = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        
        <div
          className="w-full h-120 lg:w-1/2 bg-purple-200 flex justify-center items-center p-10"
          style={{
            backgroundImage: "url('src/assets/delivery.png')",
            backgroundPosition: "center",
            backgroundSize: "cover", 
          }}
        ></div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">MOST POPULAR</h2>
          <p className="text-gray-600 mb-4 text-sm">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <img
            src="src/assets/meat.png"
            alt="Stew Meat"
            className="w-48 h-48 object-cover mb-4"
          />
          <p className="font-semibold text-gray-800">English Department</p>
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>15 Sales</span>
          </div>
          <p className="line-through text-gray-400 text-sm">
            $16.48{" "}
            <span className="text-green-600 font-semibold text-base ml-2">$6.48</span>
          </p>
          <div className="flex justify-center space-x-2 mt-3">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 mb-10 px-4 w-full max-w-6xl">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <span className="text-red-600 font-extrabold text-4xl">{item}.</span>
              <h4 className="font-medium text-xs text-gray-900">Easy to use</h4>
            </div>
            <p className="text-xs text-gray-500 mt-1 ml-10">
              Things on a very small that you have any direct
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;

