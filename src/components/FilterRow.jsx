import React, { useState } from "react";

const FilterRow = ({ totalCount }) => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("popularity");

  return (
    <div className="flex flex-wrap items-center justify-between py-4 px-6 border-b border-gray-200 text-sm text-gray-700 mb-4">
      {/* Result Count */}
      <div className="mb-2 md:mb-0">
        <strong>Showing all {totalCount} results</strong>
      </div>

      {/* Views */}
      <div className="flex items-center space-x-2 mb-2 md:mb-0">
        <span className="font-semibold mr-2">Views:</span>
        <button
          onClick={() => setView("grid")}
          className={`border p-2 rounded ${
            view === "grid" ? "bg-gray-200" : "bg-white"
          }`}
        >
          &#x25A3;
        </button>
        <button
          onClick={() => setView("list")}
          className={`border p-2 rounded ${
            view === "list" ? "bg-gray-200" : "bg-white"
          }`}
        >
          &#9776;
        </button>
      </div>

      {/* Sort + Filter Grubu */}
      <div className="flex items-center space-x-3 mb-2 md:mb-0">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="popularity">Popularity</option>
          <option value="newest">Newest</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>

        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterRow;


