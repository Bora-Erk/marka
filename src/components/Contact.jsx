import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-8 py-16 max-w-6xl mx-auto">
      
      <div className="max-w-lg pl-8 md:pl-16"> 
        <p className="text-base font-bold text-gray-700 mb-4">CONTACT US</p> 
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 leading-tight"> 
          Get in touch <br /> today!
        </h1>
        <p className="text-lg text-gray-500 mb-8"> 
          We know how large objects will act, <br />
          but things on a small scale
        </p>
        <p className="font-bold text-lg text-gray-900 mb-3"> 
          Phone : <span className="text-gray-700">+451 215 215</span>
        </p>
        <p className="font-bold text-lg text-gray-900 mb-8"> 
          Fax : <span className="text-gray-700">+451 215 215</span>
        </p>
        <div className="flex space-x-6"> 
          <Twitter className="w-7 h-7 text-gray-900 cursor-pointer" /> 
          <Facebook className="w-7 h-7 text-gray-900 cursor-pointer" />
          <Instagram className="w-7 h-7 text-gray-900 cursor-pointer" />
          <Linkedin className="w-7 h-7 text-gray-900 cursor-pointer" />
        </div>
      </div>

      
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="src/assets/aile.png"
          alt="Contact Us"
          className="max-w-md h-auto"
        />
      </div>
    </div>
  );
};

export default Contact;

