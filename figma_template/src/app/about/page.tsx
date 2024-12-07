import React from "react";

export default function AboutUs(){
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Text Content */}
        <div className="bg-teal-700 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
          <p className="text-gray-200 mb-6">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="bg-white text-teal-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            View collection
          </button>
        </div>
        {/* Placeholder for Image */}
        <div className="bg-gray-200 h-full rounded-lg"></div>
      </div>

      {/* Brand Differentiation Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          What Makes Our Brand Different
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Differentiation Cards */}
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Next day as standard</h3>
          <p className="text-sm text-gray-600">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Made by true artisans</h3>
          <p className="text-sm text-gray-600">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Unbeatable prices</h3>
          <p className="text-sm text-gray-600">
            For our materials and quality, you won’t find better prices
            anywhere.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Recycled packaging</h3>
          <p className="text-sm text-gray-600">
            We use 100% recycled to ensure our footprint is more manageable.
          </p>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="text-center mt-12 mb-8">
        <h2 className="text-3xl font-bold">Our Popular Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Product Card */}
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
          <h3 className="text-lg font-semibold">The Poplar suede sofa</h3>
          <p className="text-gray-600">$99.00</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
          <h3 className="text-lg font-semibold">The Dandy chair</h3>
          <p className="text-gray-600">$99.00</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
          <h3 className="text-lg font-semibold">The Dandy chair</h3>
          <p className="text-gray-600">$99.00</p>
        </div>
      </div>
    </div>
  );
};
