import React from "react";

const GiftFinder = () => {
  return (
    <div className="bg-[#f5f7ef] rounded-3xl p-4 sm:p-5 flex flex-col lg:flex-row justify-between items-center mt-5">
      {/* Left: Content */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-[#4c4f3e] flex items-center mb-3">
          <span className="text-2xl mr-2">🔍</span> Gift Finder
        </h2>

        <div className="bg-white p-3 rounded-xl shadow-md w-full max-w-md">
          <p className="mb-3 font-medium text-gray-700">Search Gifts Quicker ⚡</p>
          <div className="grid grid-cols-2 gap-4">
            {/* Occasion */}
            <div className="text-center">
              <img
                src="https://www.fnp.com/assets/images/custom/new-app-23/8-gift_finder/New-App_Gift-Finder_Occasion.jpg"
                alt="Occasion"
                className="rounded-lg w-24 h-24 object-cover mx-auto"
              />
              <p className="mt-1 text-sm text-gray-700">Occasion</p>
            </div>
            {/* Gift Type */}
            <div className="text-center">
              <img
                src="https://www.fnp.com/assets/images/custom/new-app-23/8-gift_finder/New-App_Gift-Finder_Gift-Type.jpg"
                alt="Gift Type"
                className="rounded-lg w-24 h-24 object-cover mx-auto"
              />
              <p className="mt-1 text-sm text-gray-700">Gift Type</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Image in circle */}
      <div className="mt-6 lg:mt-0 lg:ml-6 relative flex-1 flex justify-center">
        <div className="w-44 h-44 bg-[#c9f0e5] rounded-full flex justify-center items-center overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/front-view-young-female-inside-blue-present-box-using-magnifier_179666-9302.jpg?semt=ais_items_boosted&w=740"
            alt="Girl with magnifying glass"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftFinder;
