import React from "react";

const Content1 = () => {
  const categories = [
    { title: "Father's Day", img: "/img/f1.jpg" },
    { title: "Birthday", img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Birthday_Desk-28-03.jpg" },
    { title: "Anniversary", img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Anniversary_desk_10-03-2025.jpg" },
    { title: "2-Hour Delivery", img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/2hourdelivery_Squircle_41224.jpg" },
    { title: "FNP Luxe", img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/LUXE_NEW_Desk-02-05-2025.jpg" },
    { title: "Personalised", img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Persoanlised_Squircle-10-06-2025.jpg" },
    { title: "Cakes", img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Cakes-desk_20.jpg" },
    { title: "Plants", img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Plants_Squircle-10-06-2025.jpg" },
    { title: "Pride Month", img: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/pride_month_Desk_icon-07-06-2025.jpg" },
  ];

  return (
    <div className="w-full px-4 py-6">
      {/* Top 3 Banner Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8    ">
        <img
          src="/img/f2.jpg"
          alt="Dad Banner"
          className="rounded-lg w-full"
        />
        <img
          src="/img/pgifts.jpg"
          alt="Personalised Gifts"
          className="rounded-lg w-full"
        />
        <img
          src="/img/ma.jpg"
          alt="Birthday Anniversary"
          className="rounded-lg w-full"
        />
        <img
          src="/img/fb.jpg"
          alt="follower"
          className="rounded-lg w-full"
        />
        
      </div>

      {/* Category Scroll Section */}
      <div className="flex space-x-7 overflow-x-auto scrollbar-hide">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center min-w-[120px]">
            <img
              src={cat.img}
              alt={cat.title}
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="mt-2 text-sm text-center">{cat.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content1;
