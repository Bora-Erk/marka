// Footer.jsx
import React from "react";
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e2235] text-white py-12 px-8">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Consulting Agency For Your Business
          </h2>
          <p className="text-gray-400">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <button className="mt-6 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded">
          Contact Us
        </button>
      </div>

      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 text-sm mb-16">
        <div>
          <h5 className="font-bold mb-4 ml-7">Company Info</h5>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 ml-7">Legal</h5>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 ml-7">Features</h5>
          <ul className="space-y-2 text-gray-300">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 ml-7">Resources</h5>
          <ul className="space-y-2 text-gray-300">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 ml-7">Get In Touch</h5>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={16} /> (480) 555-0103
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 4517 Washington Ave.
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> debra.holt@example.com
            </li>
          </ul>
        </div>
      </div>

      
      <div className="pt-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>Made With Love By Finland All Right Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-blue-400">
          <Facebook size={20} className="cursor-pointer hover:text-blue-500" />
          <Twitter size={20} className="cursor-pointer hover:text-blue-500" />
          <Instagram size={20} className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
