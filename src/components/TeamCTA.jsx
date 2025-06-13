import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const TeamCTA = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1E2235] mb-4">
        Start your 14 days free trial
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
      </p>
      <button className="bg-blue-500 text-white px-7 py-3 rounded font-semibold mb-8 hover:bg-blue-600 transition">
        Try it free now
      </button>
      <div className="flex space-x-6 mt-4">
        <Twitter className="w-6 h-6 text-blue-400 cursor-pointer hover:scale-110 transition" />
        <Facebook className="w-6 h-6 text-blue-600 cursor-pointer hover:scale-110 transition" />
        <Instagram className="w-6 h-6 text-black cursor-pointer hover:scale-110 transition" />
        <Linkedin className="w-6 h-6 text-blue-700 cursor-pointer hover:scale-110 transition" />
      </div>
    </div>
  );
};

export default TeamCTA;
