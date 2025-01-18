import React from 'react';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <div className="relative">

      {/* Frame */}
      <div className="absolute top-24 left-1/4 right-1/4 h-80 bg-gray-50">
        {/* Frame */}
        <div className="absolute left-0 top-0 w-11/12 h-full">
          {/* Bag */}
          <div className="absolute top-0 left-2 text-xl font-semibold">Bag</div>
          {/* Auto Layout Vertical */}
          <div className="absolute top-4 left-2">
            {/* Auto Layout Horizontal */}
            <div className="flex items-start p-4 bg-gray-100/5 shadow-inner">
              {/* Frame (Product Image) */}
              <div className="w-48 h-48 bg-cover bg-center mr-8" style={{ backgroundImage: 'url(./images/product1.jpg)' }} /> 
              {/* Auto Layout Vertical */}
              <div className="flex flex-col">
                {/* Auto Layout Horizontal (Product Info) */}
                <div className="flex items-start">
                  <div className="flex flex-col">
                    <p className="text-base font-normal">Library Stool Chair</p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</span>
                      <div className="flex items-center ml-2">
                        <span className="text-sm text-gray-500">Size</span>
                        <div className="w-8 h-8 bg-white ml-1">
                          <span className="text-sm text-gray-500 text-right pr-1">L</span> 
                        </div>
                      </div>
                      <div className="flex items-center ml-2">
                        <span className="text-sm text-gray-500">Quantity</span>
                        <div className="w-8 h-8 bg-white ml-1">
                          <span className="text-sm text-gray-500 text-right pr-1">1</span> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-8">
                    <p className="text-sm text-gray-500">MRP: $99</p>
                  </div>
                </div>
                {/* Auto Layout Horizontal (Icons) */}
                <div className="flex items-start mt-4">
                  <div className="w-6 h-6"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      {/* Heart icon */}
                    </svg>
                  </div>
                  <div className="w-6 h-6 ml-4"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      {/* Share icon */}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Auto Layout Vertical (Second Product) */}
          <div className="absolute top-24 left-2"> 
            {/* ... (Similar structure as the first product) ... */}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="absolute top-10 right-1/4 w-96">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="flex items-center mb-2">
          <span className="mr-2">Subtotal:</span>
          <span>$198.00</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">Estimated Delivery & Handling:</span>
          <span className="text-green-500">Free</span>
        </div>
        <div className="border-t border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Total:</span>
            <span className="text-xl font-semibold">$198.00</span>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 rounded-md mt-4">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductPage;