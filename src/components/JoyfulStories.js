import React from "react";

const storyData = [
  {
    image:
      "https://img.freepik.com/free-photo/close-up-father-s-day-arrangement_23-2148883805.jpg",
    title: "Designed for Dads to make Fathers Day special",
    tag: "SEND GIFTS",
  },
  {
    image:
      "https://img.freepik.com/free-photo/bouquet-roses-wedding-day_23-2148881580.jpg",
    title: "The vow he took, she leapt in love ❤️",
    tag: "WEDDING FLOWERS",
  },
  {
    image:
      "https://img.freepik.com/free-photo/hands-holding-coffee-mug_23-2148883779.jpg",
    title: "Personalized mugs with love ☕",
    tag: "PERSONALISED MUGS",
  },
  {
    image:
      "https://img.freepik.com/free-photo/indian-wedding-couple-ceremony_23-2148980905.jpg",
    title: "Timeless moments of love",
    tag: "WEDDING GIFTS",
  },
  {
    image:
      "https://img.freepik.com/free-photo/delicious-chocolate-cake-slice-close-up_23-2148883789.jpg",
    title: "Things you can say about your partner & cake 🍰",
    tag: "WEDDING CAKES",
  },
  {
    image:
      "https://img.freepik.com/free-photo/woman-holding-sunflower-bouquet_23-2148883799.jpg",
    title: "Customized jewellery from FNP",
    tag: "GIFT JEWELLERY",
  },
  {
    image:
      "https://img.freepik.com/free-photo/mehndi-hands-henna-indian-tradition_23-2148881575.jpg",
    title: "The wedding traditions that stay forever",
    tag: "WEDDING GIFTS",
  },
];

const JoyfulStories = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-[#222] mb-10">
        Joyful Gifting Stories
      </h2>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {storyData.map((story, index) => (
          <div
            key={index}
            className="min-w-[190px] max-w-[160px] rounded-xl bg-white shadow-md overflow-hidden relative"
          >
            <img
              src={story.image}
              alt={story.tag}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-1 left-2 text-white bg-black bg-opacity-50 px-2 py-0.5 text-xs rounded">
              👁️ {Math.floor(Math.random() * 5 + 1)}
            </div>
            <div className="p-2 text-sm font-medium text-gray-700">
              {story.title.length > 40
                ? story.title.slice(0, 38) + "..."
                : story.title}
            </div>
            <div className="px-2 pb-2">
              <span className="bg-[#5f4dee] text-white text-xs px-2 py-1 rounded">
                {story.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoyfulStories;
