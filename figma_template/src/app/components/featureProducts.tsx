import Image from "next/image"
import Feature1 from "../../public/Image/p1.png";
import Feature2 from "../../public/Image/p5.png";
import Feature3 from "../../public/Image/item-category 1.png";
import Feature4 from "../../public/Image/p2.png";

export default function FeatureProducts(){
    return(
          
          /* Featured Products Section */
          <div>
          <section className="max-w-[1321px] w-full h-[461px] flex justify-between items-center">
            <h2 className="flex justify-start items-start text-2xl font-semibold text-gray-800 mb-6">
              Featured Products
            </h2>
            <div className="flex justify-between items-end w-[1321px] h-[377px]">
              {/* Product list goes here */}

              {/* Product 1 */}
              <div className="w-[312px] h-[377px] flex flex-col p-0">
                {/* image n details */}
                <div className="w-full h-[312px] bg-gray-300 rounded-md mb-2">
                  <Image className="w-full h-full object-cover rounded-md" src={Feature1.src} alt="Product 1" />
                </div>
                {/* Product Info */}
                <p className="text-lg font-medium text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-gray-500">$20</p>
              </div>
              {/* Product 2 */}
              <div className="w-full max-w-[312px] mx-auto h-auto flex flex-col items-center rounded-md">
                {/* Product Image */}
                <div className="w-full h-[312px] bg-gray-300 rounded-md mb-2">
                  <Image
                    className="w-full h-full object-cover rounded-md"
                    src={Feature2.src}
                    alt="Product 2"
                  />
                </div>
                {/* Product Info */}
                <p className="text-lg font-medium text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-gray-500">$20</p>
              </div>
              {/* Product 3 */}
              <div className="w-full max-w-[312px] mx-auto h-auto flex flex-col items-center rounded-md">
                {/* Product Image */}
                <div className="w-full h-[312px] bg-gray-300 rounded-md mb-2">
                  <Image className="w-full h-full object-cover rounded-md" src={Feature3.src} alt="Product 3"
                  />
                </div>
                {/* Product Info */}
                <p className="text-lg font-medium text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-gray-500">$20</p>
              </div>
              {/* Product 4 */}
              <div className="w-full max-w-[312px] mx-auto h-auto flex flex-col items-center rounded-md">
                {/* Product Image */}
                <div className="w-full h-[312px] bg-gray-300 rounded-md mb-2">
                  <Image
                    className="w-full h-full object-cover rounded-md"
                    src={Feature4.src}
                    alt="Product 4"
                  />
                </div>
                {/* Product Info */}
                <p className="text-lg font-medium text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-gray-500">$20</p>
              </div>
            </div>
          </section>
        </div>
    )
}