import React, { useEffect, useState } from "react";
import axios from "axios";

const OccasionSection = () => {
  const [occasions, setOccasions] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/occasions")
      .then(res => setOccasions(res.data))
      .catch(err => console.error(err));

    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Tailored For Your Occasions
      </h2>

      {/* Occasion Tabs */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide mb-6">
        {occasions.map((oc, index) => (
          <div
            key={index}
            className={`min-w-fit px-4 py-2 rounded-full text-sm cursor-pointer whitespace-nowrap transition-all duration-300 ease-in-out transform hover:scale-105 ${
              index === 0
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-pink-100 hover:shadow-md"
            }`}
          >
            {oc.name}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden bg-white shadow transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg group"
          >
            <div className="overflow-hidden">
              <img
                src={p.image_url}
                alt={p.title}
                className="w-full h-48 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-3">
              <div className="text-sm font-medium group-hover:text-pink-600">
                {p.title}
              </div>
              <div className="mt-2 font-semibold text-gray-800">
                ₹ {p.price}
                {p.old_price && (
                  <span className="ml-2 text-gray-400 line-through text-sm">
                    ₹ {p.old_price}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccasionSection;
