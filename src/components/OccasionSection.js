import React from "react";

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
      image:
        "https://www.fnp.com//images/pr/l/v20230525174933/personalised-white-photo-mug_2.jpg",
    },
    {
      title: "Father's Day Blue Orchid N Asparagus Vase Arrangement",
      price: "₹ 999",
      oldPrice: "₹ 1099",
      image:
        "https://m-i1.fnp.com/images/pr/l/v20250605184543/fathers-day-blue-orchid-n-asparagus-vase-arrangement_1.jpg",
    },
    {
      title: "Green Gift in Cute Resin Pot for Dad",
      price: "₹ 799",
      oldPrice: "₹ 899",
      image:
        "https://www.fnp.com/images/pr/l/v300/set-of-3-green-plants-in-cute-girl-pots_1.jpg",
    },
    {
      title: "Butterscotch Cream Cake for Cool Dad",
      price: "₹ 749",
      oldPrice: null,
      image:
        "https://www.fnp.com/images/pr/l/v20250424113346/mothers-day-mango-cream-cake_1.jpg",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white">
      {/* Section Heading */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
        Tailored For Your Occasions
      </h2>

      {/* Scrollable Occasion Tabs */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide mb-6">
        {occasions.map((occasion, index) => (
          <div
            key={index}
            className={`min-w-fit px-4 py-2 rounded-full text-sm cursor-pointer whitespace-nowrap transition-all duration-300 ease-in-out transform hover:scale-105 ${
              index === 0
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-pink-100 hover:shadow-md"
            }`}
          >
            {occasion}
          </div>
        ))}
      </div>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden bg-white shadow transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg group"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 sm:h-40 md:h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-3">
              <div className="text-sm font-medium group-hover:text-pink-600 transition-colors duration-300">
                {product.title}
              </div>
              <div className="mt-2 font-semibold text-gray-800">
                {product.price}
                {product.oldPrice && (
                  <span className="ml-2 text-gray-400 text-sm line-through">
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
