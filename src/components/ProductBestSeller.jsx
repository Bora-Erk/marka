// ProductBestSeller.jsx
import React from "react";

const products = [
  {
    id: 1,
    image: "https://picsum.photos/id/1011/400/400",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1012/400/400",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1013/400/400",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/1014/400/400",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 5,
    image: "https://picsum.photos/id/1015/400/400",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 6,
    image: "https://picsum.photos/id/1016/400/400",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 7,
    image: "https://picsum.photos/id/1010/400/400",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 8,
    image: "https://picsum.photos/id/1018/400/400",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

const ProductBestSeller = () => {
  return (
    <section className="py-12 px-6 md:px-22 max-w-7xl mx-auto bg-gray-50 ">

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
        Bestseller Products
      </h3>
      <div className="border-b border-gray-300 my-4"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-sm">
            <img src={product.image} alt={product.title} className="w-full h-auto object-cover mb-4" />
            <div className="px-4 pb-4">
              <h3 className="text-sm font-bold text-gray-900 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.department}</p>
              <p className="text-sm text-gray-400 line-through mr-2 inline-block">{product.oldPrice}</p>
              <p className="text-sm text-green-600 font-semibold inline-block">{product.newPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductBestSeller;
