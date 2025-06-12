import React from 'react';

const TeamHeader = () => {
  return (
    <div className="text-center py-16 px-4">
      <h5 className="text-gray-500 font-semibold mb-4 text-sm tracking-wide">WHAT WE DO</h5>
      <h1 className="text-4xl md:text-5xl font-bold text-[#1e2235] mb-8">Innovation tailored for you</h1>
      <div className="flex justify-center items-center space-x-2 text-gray-500 text-sm font-medium mt-4">
        <span className="text-[#1e2235] font-bold">Home</span>
        <span>&gt;</span>
        <span>Team</span>
      </div>
    </div>
  );
};

export default TeamHeader;
