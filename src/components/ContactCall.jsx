import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactCall = () => {
  const contactItems = [
    {
      icon: <Phone size={48} className="text-blue-400 mx-auto" />,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      bgDark: false,
    },
    {
      icon: <MapPin size={48} className="text-blue-400 mx-auto" />,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      bgDark: true,
    },
    {
      icon: <Mail size={48} className="text-blue-400 mx-auto" />,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      bgDark: false,
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8">
      
      <p className="text-sm font-semibold text-gray-700 mb-2">VISIT OUR OFFICE</p>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        We help small businesses <br /> with big ideas
      </h2>

      
      <div className="flex flex-col md:flex-row w-full max-w-5xl mt-16">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center p-6 flex-1 h-[400px] ${
              item.bgDark ? "bg-[#1e2235] text-white" : "bg-white text-gray-900"
            }`}
          >
            {item.icon}
            <div className="mt-4 space-y-1 text-sm font-semibold">
              {item.emails.map((email, i) => (
                <div key={i}>{email}</div>
              ))}
            </div>
            <p className="mt-4 font-semibold">Get Support</p>
            <button
              className={`mt-4 px-6 py-2 text-sm font-semibold ${
                item.bgDark
                  ? "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Submit Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCall;





