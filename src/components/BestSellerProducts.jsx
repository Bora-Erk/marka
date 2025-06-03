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
      <div className="flex">
        <div className="w-1/3 bg-yellow-400 flex flex-col justify-center items-start px-10 py-20 text-black"
            style={{
                backgroundImage: "url('src/assets/quinoa.jpg')",
                backgroundSize: "370px",
            }}
        >
          
        </div>

        
        <div className="w-2/3 px-10 py-6">
          <div className="flex justify-between items-center ml-4">
            <h2 className="text-lg font-bold">BESTSELLER PRODUCTS</h2>
            <div className="flex items-center gap-6">
            <div className="flex gap-4 text-sm text-gray-500">
              <span>Men</span>
              <span>Women</span>
              <span>Accessories</span>
            </div>
              <div className="flex gap-2 ml-4">
                <button className="rounded-full border w-6 h-6 text-center">{'<'}</button>
                <button className="rounded-full border w-6 h-6 text-center">{'>'}</button>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-3 gap-6 mt-8">
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

