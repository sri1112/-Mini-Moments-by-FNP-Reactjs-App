import React from "react";

const flowerData = [
  {
    name: "Roses",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/roses_170125.jpg",
  },
  {
    name: "Carnations",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/Flowers_Carnations_170125.jpg",
  },
  {
    name: "Orchids",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/Orchids_Desk_170125.jpg",
  },
  {
    name: "Flower Bestsellers",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/lilies_170125.jpg",
  },
  {
    name: "Gerberas",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/gerberas_170125.jpg",
  },
  {
    name: "Luxe",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/Flowers_Luxe_Desk_170125.jpg",
  },
];

const FlowerSection = () => {
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold mb-4">Pick Their Fav Flowers</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {flowerData.map((flower, index) => (
          <div
            key={index}
            className="group min-w-[220px] max-w-[160px] text-center transition-transform duration-300 transform hover:scale-105"
          >
            {/* Flower image with hover zoom */}
            <div className="rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-lg">
              <img
                src={flower.image}
                alt={flower.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Name */}
            <p className="mt-2 font-medium text-sm text-gray-700 group-hover:text-[#5f4dee] transition-colors duration-300">
              {flower.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerSection;
