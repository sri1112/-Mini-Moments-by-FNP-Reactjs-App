import React from "react";

const GiftingSection = () => {
  const popularGifts = [
    {
      title: "Just Launched",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGy20mlHcN9YRy17O0Om5V2IjAGZBQtPuUvUcrjDbt36_RhZwX",
    },
    {
      title: "Midnight Delivery",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDr76gTerkqcVveQVkW_1RN5DHqi7N63RpQl6Wp9DCkQ5aCw6n",
    },
    {
      title: "Get Today",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfrYanB-bQlLmWFtgH4cydmeFIaDoqQyFh0UAK0lDh3lACDnem",
    },
    {
      title: "Send Abroad",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYjvn9VJqjL5btrfFIwCAYwygzjE48tyHySumWMkV3hVLRZsUD",
    },
    {
      title: "Send In Bulk",
      image:
        "https://t4.ftcdn.net/jpg/12/12/07/29/360_F_1212072930_TvcRXCQkKQOvqcgcKYlcIizZcppwK0it.jpg",
    },
  ];

  const dadGifts = [
    {
      title: "Flowers",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6WtG1YJBVXN4hcJdH5eeYqJP56b5MZQxmoTkSC5jxJQBT6V4l",
    },
    {
      title: "Personalised Gifts",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaYtkVsKPE1lCzpFzO0jLNJYdZQ0sMpe67QIUxhuOeTCJtTfj",
    },
    {
      title: "Hampers",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfBwnrmr33NQ-Fy2NPqS8lzfRXIUVakkBkUlDOMFMaGR3tyzTs",
    },
    {
      title: "Plants",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHQd5eBpBKrvCmAn7u_S87B6T4-n1TB2qRVnCwcCbNCKz5OArF",
    },
    {
      title: "Accessories",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTimzOo13BTCi9fVwDW1pmmiJJ2P84rYJZe_7UqD6tcJfeOmNwU",
    },
  ];

  // Create different hover styles
  const hoverEffects = [
    "hover:rotate-1 hover:scale-105 hover:shadow-xl",
    "hover:-rotate-1 hover:scale-110 hover:brightness-110",
    "hover:scale-105 hover:shadow-lg hover:blur-[1px]",
    "hover:scale-100 hover:contrast-125 hover:ring-2 hover:ring-pink-400",
    "hover:scale-105 hover:saturate-200 hover:shadow-md",
  ];

  return (
    <div className="px-4 sm:px-6 py-10 bg-white">
      {/* Section 1 */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Popular In Gifting
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
        {popularGifts.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-500 ease-in-out transform group ${hoverEffects[index % hoverEffects.length]}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-xl shadow-md transition-all duration-300"
            />
            <span className="mt-2 text-sm font-medium text-center group-hover:text-rose-600 transition-colors duration-300">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Heartfelt Gifts For Dad
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {dadGifts.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-500 ease-in-out transform group ${hoverEffects[index % hoverEffects.length]}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-xl shadow-md transition-all duration-300"
            />
            <span className="mt-2 text-sm font-medium text-center group-hover:text-green-600 transition-colors duration-300">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftingSection;
