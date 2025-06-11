import React from "react";

const ExclusiveOffers = () => {
  const offers = [
    {
      brand: "Airtel Payments Bank",
      color: "bg-red-600",
      image: "https://www.fnp.com/assets/images/custom/new-home-2025/offers/Airtel_Partner_Banners_New_UI-25-04-2025.jpg",
      title: "Enjoy Flat 10% Off",
      subTitle: "UPTO ₹200",
      terms: "T&C Apply | On minimum transaction of ₹999",
    },
    {
      brand: "Paytm UPI",
      color: "bg-blue-900",
      image: "https://www.fnp.com/assets/images/custom/new-home-2025/offers/Paytm_New_UI-28-04-2025.jpg",
      title: "₹100 Cashback",
      subTitle: "UPTO",
      terms: "T&C Apply | on Payments using Paytm UPI",
    },
    {
      brand: "Mobikwik",
      color: "bg-blue-600",
      image: "https://www.fnp.com/assets/images/custom/new-home-2025/offers/Mobikwik_170125.jpg",
      title: "15% Cashback",
      subTitle: "GET UPTO",
      terms: "T&C Apply | On minimum transaction of ₹800",
    },
  ];

  return (
    <div className="px-6 py-10">
      <h2 className="text-xl font-semibold mb-6">Get Exclusive Offers from</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`${offer.color} text-white rounded-xl p-6 flex flex-col justify-center items-start min-h-[150px]`}
          >
            <img
              src={offer.image}
              alt={offer.brand}
              className="h-6 mb-3"
            />
            <p className="text-xs font-light mb-1">{offer.subTitle}</p>
            <h3 className="text-2xl font-bold leading-tight">{offer.title}</h3>
            <p className="text-xs mt-2">{offer.terms}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
