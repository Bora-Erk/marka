import React from "react";

const products = [
  {
    id: 1,
    image: "src/assets/Product1.png",
    title: "Graphic Design",
    subtitle: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: "src/assets/Product2.png",
    title: "Graphic Design",
    subtitle: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: "src/assets/Product3.png",
    title: "Graphic Design",
    subtitle: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: "src/assets/Product4.png",
    title: "Graphic Design",
    subtitle: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

const Products = () => {
  return (
    <div className="py-10 px-5 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">BESTSELLER PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto mb-4 rounded shadow-md"
            />
            <h3 className="font-semibold text-gray-800">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.subtitle}</p>
            <p className="mt-2">
              <span className="line-through text-gray-400 mr-2">
                {product.oldPrice}
              </span>
              <span className="text-green-600 font-semibold">
                {product.newPrice}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
