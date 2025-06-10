import React from "react";
import { ChevronRight } from "lucide-react";

const ProductDescription = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      
      <div className="flex justify-center space-x-8 border-b border-gray-300 mb-8 text-gray-600 text-sm font-medium">
        <div className="py-2 border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 cursor-pointer">
          Description
        </div>
        <div className="py-2 border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 cursor-pointer">
          Additional Information
        </div>
        <div className="py-2 border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 cursor-pointer flex items-center space-x-1">
          <span>Reviews</span>
          <span className="text-green-500">(0)</span>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="flex-shrink-0">
          <img
            src="src/assets/pembe.png"
            alt="Pembe"
            className="w-[320px] h-auto rounded-lg object-cover"
          />
        </div>

        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            the quick fox jumps over
          </h2>
          <p className="text-gray-600 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-gray-600 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>

        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            the quick fox jumps over
          </h2>
          <ul className="space-y-2 mb-6">
            {[...Array(4)].map((_, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <ChevronRight className="w-4 h-4 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            the quick fox jumps over
          </h2>
          <ul className="space-y-2">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <ChevronRight className="w-4 h-4 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;


