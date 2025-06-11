import React from "react";
import Navbar from "./Navbar";
import Content1 from "./Content1";
import OccasionSection from "./OccasionSection";
import GiftingSection from "./GiftingSection";
import FathersDayCityGifts from "./FathersDayCityGifts";
import ExclusiveOffers from "./ExclusiveOffers";
import GiftFinder from "./GiftFinder";
import JoyfulStories from "./JoyfulStories";
import FlowerSection from "./FlowerSection";
import CakeCategories from "./CakeCategories";
import FooterSection from "./FooterSection";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Sticky Navbar OUTSIDE the flex layout */}
      <Navbar />

      <div className="flex flex-wrap gap-4 mt-4">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">Sidebar</div>

        {/* Main Content */}
        <div className="w-full lg:flex-1">
          <Content1 />
          <OccasionSection />
          <GiftingSection />
          <FathersDayCityGifts />
          <ExclusiveOffers />
          <GiftFinder />
          <JoyfulStories />
          <FlowerSection />
          <CakeCategories />
        </div>

        {/* Footer */}
        <div className="w-full">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
