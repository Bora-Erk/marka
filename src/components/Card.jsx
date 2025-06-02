import React from "react";

const Cards = () => {
  const cards = [
    {
      image: "src/assets/card1.png",
      topText: "Your Space",
      title: "Unique Life",
      linkText: "Explore Items",
    },
    {
      image: "src/assets/card2.png",
      topText: "Ends Today",
      title: "Elements Style",
      linkText: "Explore Items",
    },
    {
      image: "src/assets/card3.png",
      topText: "Ends Today",
      title: "Elements Style",
      linkText: "Explore Items",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center p-6 bg-gray-100">
      {cards.map((card, index) => (
        <div
        key={index}
        className="bg-white rounded-lg shadow-md px-4 py-3 flex flex-row-reverse items-center gap-4 w-[360px] h-[180px]"
      >
        <img
          src={card.image}
          alt={card.title}
          className="h-42 w-42 object-contain flex-shrink-0"
        />
        <div className="flex flex-col items-start text-left flex-1 pl-2">
          <p className="text-xs text-gray-500">{card.topText}</p>
          <h2 className="text-base font-semibold text-gray-800 leading-snug">
            {card.title}
          </h2>
          <a href="#" className="text-xs text-blue-600 mt-1 underline">
            {card.linkText}
          </a>
        </div>
      </div>
      
      ))}
    </div>
  );
};

export default Cards;












