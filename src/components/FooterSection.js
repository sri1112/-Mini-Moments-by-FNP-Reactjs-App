import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Top Info Section */}
      <div className="px-6 py-8 max-w-7xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-2">
          Celebrate Occasions with India’s #1 Online Gift Store
        </h3>
        <p className="text-sm text-gray-600">
          Thoughtfully curated 139,821 Gift Ideas. Get 2-hour Delivery & Free Shipping in India
        </p>

        <h4 className="text-lg font-bold mt-6 mb-3">MnMn: No. 1 Online Gift Shop</h4>
        <p className="text-sm max-w-4xl mx-auto text-gray-700">
          MnMn (Mini moments) is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones...
        </p>

        {/* Trust Indicators */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex items-start gap-2 text-left">
            <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25h-7.5v7.5h7.5v-7.5z" />
            </svg>
            <div>
              <div className="font-medium">Worldwide Delivery</div>
              <p className="text-xs text-gray-600">We deliver gifts to over 70 countries</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-left">
            <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3c0 .838-.34 1.593-.88 2.12l-3.12 3.12-3.12-3.12A2.978 2.978 0 0112 11z" />
            </svg>
            <div>
              <div className="font-medium">100% Safe & Secure Payments</div>
              <p className="text-xs text-gray-600">Pay using secure payment methods</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-left">
            <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01M12 16h.01M9 12h6M12 8v.01M4.928 4.928a10 10 0 0114.142 0M4.928 19.071a10 10 0 010-14.142M19.071 19.071a10 10 0 01-14.142 0" />
            </svg>
            <div>
              <div className="font-medium">Dedicated Help Center</div>
              <button className="text-blue-600 text-xs underline">Chat With Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-6 gap-6 text-sm">
          <div>
            <h5 className="font-semibold mb-2">Policy Info</h5>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">About Company</h5>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">FNP Business</h5>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Decoration Services</a></li>
              <li><a href="#" className="hover:text-blue-500">Corporate Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Affiliate Program</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Need Help?</h5>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Useful Links</h5>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Quotes N Wishes</a></li>
              <li><a href="#" className="hover:text-blue-500">Flower Astrology</a></li>
              <li><a href="#" className="hover:text-blue-500">Care Guide</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Subscribe Now</h5>
            <p className="text-gray-600 text-sm mb-2">Get updates on promotions and offers</p>
            <div className="flex items-center border rounded px-2 py-1 bg-gray-100">
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent outline-none ml-2 w-full text-sm"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
