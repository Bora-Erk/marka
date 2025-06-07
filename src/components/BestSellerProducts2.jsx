import React from "react";

const products = [
  {
    image: "src/assets/icecream.png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
  },
  {
    image: "src/assets/apple.png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
  },
  {
    image: "src/assets/ham.png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    price: "$6.48",
  },
];

const BestsellerProducts = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row">
        
        
        <div
          className="w-full md:w-1/3 order-2 md:order-1 bg-yellow-400 flex flex-col justify-center items-start px-10 py-80 md:py-80 text-black bg-no-repeat bg-center md:bg-right bg-[length:370px] md:bg-[length:370px]"
          style={{
            backgroundImage: "url('src/assets/donut.jpg')",
          }}
        >
        </div>

        
        <div className="w-full md:w-2/3 order-1 md:order-2 px-6 md:px-10 py-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-6">
            <h2 className="text-lg font-bold mb-4 md:mb-0">BESTSELLER PRODUCTS</h2>
            <div className="flex flex-col items-center md:flex-row md:gap-6">
              <div className="flex gap-4 text-sm text-gray-500 mb-4 md:mb-0">
                <span className="text-blue-600 font-semibold">Men</span>
                <span>Women</span>
                <span>Accessories</span>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full border w-6 h-6 flex items-center justify-center hover:bg-gray-100">
                  {"<"}
                </button>
                <button className="rounded-full border w-6 h-6 flex items-center justify-center hover:bg-gray-100">
                  {">"}
                </button>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...products, ...products].map((product, index) => (
              <div key={index} className="text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                />
                <p className="font-semibold mt-3">{product.title}</p>
                <p className="text-sm text-gray-500">{product.department}</p>
                <p className="text-sm mt-1">
                  <span className="line-through text-gray-400">{product.oldPrice}</span>{" "}
                  <span className="text-green-600 font-semibold">{product.price}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BestsellerProducts;




