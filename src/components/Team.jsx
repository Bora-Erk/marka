import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [

    {
      image:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&w=300&q=80",
      name: "Gökhan Özdemir",
      profession: "Project Manager",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80",
      name: "Bora Erk",
      profession: "Full Stack Developer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
      name: "Username",
      profession: "Profession",
    },
  ];

const Team = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 mb-5">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover rounded"
            />
            <h3 className="mt-4 font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.profession}</p>
            <div className="flex gap-4 mt-3 text-gray-600">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;


