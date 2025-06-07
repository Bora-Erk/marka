import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white relative">
      
      <div className="text-2xl font-bold text-gray-900">Bandage</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
        <li className="text-gray-900 font-semibold">Home</li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
          Shop <span>▼</span>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">About</li>
        <li className="hover:text-gray-900 cursor-pointer">Blog</li>
        <li className="hover:text-gray-900 cursor-pointer">Contact</li>
        <li className="hover:text-gray-900 cursor-pointer">Pages</li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-4 text-gray-900">
        <div className="flex items-center gap-1 cursor-pointer">
          <User size={18} />
        </div>
        <Search className="cursor-pointer" size={20} />
        <div className="relative cursor-pointer">
          <ShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
        </div>
        <div className="relative cursor-pointer">
          <Heart size={20} />
          <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 flex flex-col items-center gap-6 text-lg font-medium text-gray-600 md:hidden z-10">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Product</div>
          <div className="cursor-pointer">Pricing</div>
          <div className="cursor-pointer">Contact</div>
        </div>
      )}
    </nav>
  );
};







