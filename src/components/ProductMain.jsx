// ProductMain.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductMain = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto">
      {/* Left side - Carousel */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <Carousel className="w-full h-[400px]">
          <Carousel.Item>
            <img
              className="d-block w-100 h-[400px] object-contain"
              src="src/assets/koltuk.jpg"
              alt="Koltuk"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[400px] object-contain"
              src="src/assets/sandalye.jpg"
              alt="Sandalye"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[400px] object-contain"
              src="src/assets/koltukThumb.jpg"
              alt="Koltuk Thumb"
            />
          </Carousel.Item>
        </Carousel>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-4">
          <img
            src="src/assets/sandalye.jpg"
            alt="Thumb 1"
            className="w-16 h-16 object-cover border cursor-pointer"
          />
          <img
            src="src/assets/koltukThumb.jpg"
            alt="Thumb 2"
            className="w-16 h-16 object-cover border cursor-pointer"
          />
        </div>
      </div>

      {/* Right side - Product Info */}
      <div className="flex flex-col w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">Floating Phone</h2>

        {/* Stars & Reviews */}
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Star key={index} size={20} fill={index < 4 ? "yellow" : "none"} stroke="currentColor" />
          ))}
          <span className="text-gray-600 ml-2">10 Reviews</span>
        </div>

        {/* Price & Availability */}
        <div className="text-3xl font-bold text-blue-900 mb-2">$1,139.33</div>
        <div className="text-sm mb-4">
          <span className="font-semibold">Availability:</span>{" "}
          <span className="text-blue-600">In Stock</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
          consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>

        {/* Color options */}
        <div className="flex items-center gap-3 mb-6">
          {["#32a9e2", "#38b662", "#f05a2a", "#222533"].map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mb-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Select Options</button>
          <Heart className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
          <Eye className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductMain;

