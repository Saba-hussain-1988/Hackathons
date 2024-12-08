"use client"; // Ensures it's a Client Component
import Feature1 from "../../../public/Image/p1.png";
import Feature2 from "../../../public/Image/p4.png";
import Feature3 from "../../../public/Image/item-category 1.png";
import Feature4 from "../../../public/Image/p2.png";
import Feature5 from "../../../public/Image/category3.png"
import Feature6 from "../../../public/Image/p3.png"
import Feature7 from "../../../public/Image/p5.png"


export default function ProductsSection(){
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-8">Our Products</h2>

      {/* Row 1 */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product Card 1 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-[312px] bg-yellow-200 rounded-t-lg">
              <img
                src={Feature1.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>{" "}
              {/* Placeholder for cart logo */}
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-blue-200 rounded-t-lg">
              <img
                src={Feature2.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-green-200 rounded-t-lg">
              <img
                src={Feature3.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-red-200 rounded-t-lg">
              <img
                src={Feature4.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product Card 1 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-[312px] bg-yellow-200 rounded-t-lg">
              <img
                src={Feature5.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>{" "}
              {/* Placeholder for cart logo */}
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-blue-200 rounded-t-lg">
              <img
                src={Feature6.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-green-200 rounded-t-lg">
              <img
                src={Feature7.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="w-[312px] h-[388px] flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-[312px] bg-red-200 rounded-t-lg">
              <img
                src={Feature1.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full self-end mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
