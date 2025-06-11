import React from "react";

const GiftingSection = () => {
  const popularGifts = [
    {
      title: "Just Launched",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGy20mlHcN9YRy17O0Om5V2IjAGZBQtPuUvUcrjDbt36_RhZwX",
    },
    {
      title: "Midnight Delivery",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDr76gTerkqcVveQVkW_1RN5DHqi7N63RpQl6Wp9DCkQ5aCw6n",
    },
    {
      title: "Get Today",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfrYanB-bQlLmWFtgH4cydmeFIaDoqQyFh0UAK0lDh3lACDnem",
    },
    {
      title: "Send Abroad",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYjvn9VJqjL5btrfFIwCAYwygzjE48tyHySumWMkV3hVLRZsUD",
    },
    {
      title: "Send In Bulk",
      image: "https://t4.ftcdn.net/jpg/12/12/07/29/360_F_1212072930_TvcRXCQkKQOvqcgcKYlcIizZcppwK0it.jpg",
    },
  ];

  const dadGifts = [
    {
      title: "Flowers",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6WtG1YJBVXN4hcJdH5eeYqJP56b5MZQxmoTkSC5jxJQBT6V4l",
    },
    {
      title: "Personalised Gifts",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaYtkVsKPE1lCzpFzO0jLNJYdZQ0sMpe67QIUxhuOeTCJtTfj",
    },
    {
      title: "Hampers",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfBwnrmr33NQ-Fy2NPqS8lzfRXIUVakkBkUlDOMFMaGR3tyzTs",
    },
    {
      title: "Plants",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHQd5eBpBKrvCmAn7u_S87B6T4-n1TB2qRVnCwcCbNCKz5OArF",
    },
    {
      title: "Accessories",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTimzOo13BTCi9fVwDW1pmmiJJ2P84rYJZe_7UqD6tcJfeOmNwU",
    },
  ];

  return (
    <div className="px-6 py-10">
      {/* Popular In Gifting */}
      <h2 className="text-xl font-semibold mb-4">Popular In Gifting</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
        {popularGifts.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <span className="mt-2 text-sm font-medium">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Heartfelt Gifts For Dad */}
      <h2 className="text-xl font-semibold mb-4">Heartfelt Gifts For Dad</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {dadGifts.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg shadow"
            />
            <span className="mt-2 text-sm font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftingSection;
