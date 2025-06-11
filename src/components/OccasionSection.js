import React from "react";
import "./OccasionSection.css"; // Import custom CSS

const OccasionSection = () => {
  const occasions = [
    "Father's Day",
    "Birthday",
    "Anniversary",
    "Love N Romance",
    "Congratulations",
    "Thank You",
  ];

  const products = [
    {
      title: "Personalised White Photo Mug",
      price: "₹ 275",
      oldPrice: "₹ 325",
      image: "https://www.fnp.com//images/pr/l/v20230525174933/personalised-white-photo-mug_2.jpg",
    },
    {
      title: "Father's Day Blue Orchid N Asparagus Vase Arrangement",
      price: "₹ 999",
      oldPrice: "₹ 1099",
      image: "https://m-i1.fnp.com/images/pr/l/v20250605184543/fathers-day-blue-orchid-n-asparagus-vase-arrangement_1.jpg",
    },
    {
      title: "Green Gift in Cute Resin Pot for Dad",
      price: "₹ 799",
      oldPrice: "₹ 899",
      image: "https://www.fnp.com/images/pr/l/v300/set-of-3-green-plants-in-cute-girl-pots_1.jpg",
    },
    {
      title: "Butterscotch Cream Cake for Cool Dad",
      price: "₹ 749",
      oldPrice: null,
      image: "https://www.fnp.com/images/pr/l/v20250424113346/mothers-day-mango-cream-cake_1.jpg",
    },
  ];

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-semibold mb-6">Tailored For Your Occasions</h2>

      {/* Horizontal Scroll Tabs */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide mb-6">
        {occasions.map((occasion, index) => (
          <div
            key={index}
            className={`flex flex-col items-center min-w-[120px] px-4 py-2 cursor-pointer ${
              index === 0 ? "border-b-2 border-black font-bold" : "text-gray-500"
            }`}
          >
            <div className="text-sm">{occasion}</div>
          </div>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-3">
              <div className="text-sm font-medium">{product.title}</div>
              <div className="mt-2 text-black font-semibold">
                {product.price}
                {product.oldPrice && (
                  <span className="text-gray-400 text-sm line-through ml-2">
                    {product.oldPrice}
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
