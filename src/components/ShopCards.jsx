import React from "react";
import shop1 from "../assets/Shop1.jpg";
import shop2 from "../assets/Shop2.jpg";
import shop3 from "../assets/Shop3.jpg";
import shop4 from "../assets/Shop4.jpg";
import shop5 from "../assets/Shop5.jpg";

const cards = [
  {
    image: shop1,
    title: "CLOTHES",
    items: "5 Items",
  },
  {
    image: shop2,
    title: "CLOTHES",
    items: "5 Items",
  },
  {
    image: shop3,
    title: "CLOTHES",
    items: "5 Items",
  },
  {
    image: shop4,
    title: "CLOTHES",
    items: "5 Items",
  },
  {
    image: shop5,
    title: "CLOTHES",
    items: "5 Items",
  },
];


const ShopCards = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap py-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-[200px] h-[200px] bg-cover bg-center rounded-md shadow-md overflow-hidden"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-lg space-y-2">
            <div>{card.title}</div>
            <div className="text-sm font-normal">{card.items}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCards;
