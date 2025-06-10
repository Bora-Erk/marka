import React from "react";
import { ChevronRight } from "lucide-react";

const ProductHeader = () => {
  return (
    <div className="py-6 px-4 md:px-16 bg-white">
      <nav className="flex items-center text-sm text-[#1e2235]">
        <span className="font-semibold">Home</span>
        <ChevronRight size={16} className="text-gray-300 mx-[6px]" />
        <span className="text-gray-400 font-normal">Shop</span>
      </nav>
    </div>
  );
};

export default ProductHeader;
