import React from "react";
import { ChevronRight } from "lucide-react";

const ShopHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center py-8 px-4 md:px-16 bg-white">
      <h3 className="text-xl font-bold text-[#1e2235] mb-2 md:mb-0 text-center">Shop</h3>

      <nav className="flex items-center text-sm text-[#1e2235] space-x-1 text-center mt-4 md:mt-0">
        <span className="font-semibold">Home</span>
        <ChevronRight size={16} className="text-gray-300" />
        <span className="text-gray-400 font-normal">Shop</span>
      </nav>
    </div>
  );
};

export default ShopHeader;



