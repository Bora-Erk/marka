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
    <div className="flex flex-wrap gap-6 justify-center items-start p-6 bg-gray-100">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md px-4 py-3 flex flex-row justify-between items-center w-[400px] min-h-[180px]"
        >
          <div className="flex flex-col justify-between text-left">
            <p className="text-xs text-gray-500 mb-1">{card.topText}</p>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {card.title}
            </h2>
            <a href="#" className="text-xs text-blue-600 underline">
              {card.linkText}
            </a>
          </div>
          <img
            src={card.image}
            alt={card.title}
            className="h-40 w-40 object-contain ml-4 flex-shrink-0"
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;













