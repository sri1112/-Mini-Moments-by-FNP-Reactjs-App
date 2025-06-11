import React from "react";

const flowerData = [
  {
    name: "Roses",
    image:
      "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/roses_170125.jpg",
  },
  {
    name: "Carnations",
    image:
      "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/Flowers_Carnations_170125.jpg",
  },
  {
    name: "Orchids",
    image:
      "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/Orchids_Desk_170125.jpg",
  },
  {
    name: "Flower Bestsellers",
    image:
      "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/lilies_170125.jpg",
  },
  {
    name: "Gerberas",
    image:
      "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/gerberas_170125.jpg",
  },
  {
    name: "Luxe",
    image:
      "https://www.fnp.com/assets/images/custom/new-home-2025/flowers/Flowers_Luxe_Desk_170125.jpg",
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
            className="min-w-[220px] max-w-[160px] text-center"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="rounded-2xl w-full h-48 object-cover shadow-md"
            />
            <p className="mt-2 font-medium text-sm text-gray-700">
              {flower.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerSection;
