
import React from "react";

const Brands2 = () => {
  const brands = [
    { name: "hooli", image: "src/assets/hooli.png" },
    { name: "lyft", image: "src/assets/lyft.png" },
    { name: "piper", image: "src/assets/piper.png" },
    { name: "stripe", image: "src/assets/stripe.png" },
    { name: "aws", image: "src/assets/aws.png" },
    { name: "reddit", image: "src/assets/reddit.png" },
  ];

  return (
    <div className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Big Companies Are Here
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.image}
            alt={brand.name}
            className="h-12 opacity-70 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands2;

