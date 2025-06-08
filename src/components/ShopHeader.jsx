import React from "react";
import { ChevronRight } from "lucide-react";

const ShopHeader = () => {
  return (
    <div className="flex justify-between items-center py-8 px-4 md:px-16 bg-white">
      <h3 className="text-xl font-bold text-[#1e2235]">Shop</h3>

      
      <nav className="flex items-center text-sm text-[#1e2235] space-x-1">
        <div className="flex items-center space-x-1">
          <span className="font-semibold">Home</span>
          <ChevronRight size={16} className="text-gray-300" />
          <span className="text-gray-400 font-normal">Shop</span>
        </div>
      </nav>
    </div>
  );
};

export default ShopHeader;

