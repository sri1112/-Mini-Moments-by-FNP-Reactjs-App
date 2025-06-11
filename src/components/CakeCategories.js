import React from "react";

const cakes = [
  {
    name: "Chocolate",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/cakes/Chocolate_170125.jpg",
  },
  {
    name: "Butterscotch",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/cakes/Butterscotch_170125.jpg",
  },
  {
    name: "Luxe",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/cakes/Luxe_170125.jpg",
  },
  {
    name: "Fresh Fruits",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/cakes/FreshFruits_170125.jpg",
  },
  {
    name: "Cakes With Flowers",
    image: "https://www.fnp.com/assets/images/custom/new-home-2025/cakes/CakeswithFlowers_170125.jpg",
  },
];

const CakeCategories = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Bakery-Fresh Cakes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {cakes.map((cake, index) => (
          <div
            key={index}
            className="group cursor-pointer text-center hover:shadow-lg rounded-lg transition duration-300"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <p className="mt-2 text-sm font-medium">{cake.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeCategories;
