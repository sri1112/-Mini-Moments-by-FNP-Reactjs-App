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
// import LoginRegister from "../login&signin/LoginRegister";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Layout */}
      <div className="flex flex-col lg:flex-row gap-4 px-4 py-6">
        {/* Sidebar - Hidden on small screens */}

        {/* Main Content */}
        <main className="w-full lg:w-3/">
          <Content1 />
          <OccasionSection />
          <GiftingSection />
          <FathersDayCityGifts />
          <ExclusiveOffers />
          <GiftFinder />
          <JoyfulStories />
          <FlowerSection />
          <CakeCategories />
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full">
        <FooterSection />
      </footer>
    </div>
  );
};

export default Home;
