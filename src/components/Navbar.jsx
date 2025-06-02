import React from 'react';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      
      <div className="text-2xl font-bold text-gray-900">Bandage</div>

      
      <ul className="flex gap-6 text-gray-600 font-medium">
        <li className="text-gray-900 font-semibold">Home</li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
          Shop <span>▼</span>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">About</li>
        <li className="hover:text-gray-900 cursor-pointer">Blog</li>
        <li className="hover:text-gray-900 cursor-pointer">Contact</li>
        <li className="hover:text-gray-900 cursor-pointer">Pages</li>
      </ul>

      
      <div className="flex items-center gap-4 text-blue-500">
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <User size={16} />
          <span>Login / Register</span>
        </div>
        <Search className="cursor-pointer" size={18} />
        <div className="relative cursor-pointer">
          <ShoppingCart size={18} />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
        </div>
        <div className="relative cursor-pointer">
          <Heart size={18} />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
        </div>
      </div>
    </nav>
  );
};






