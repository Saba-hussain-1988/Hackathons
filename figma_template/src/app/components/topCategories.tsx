import Image from "next/image";
import TopCategory1 from "../../../public/image/category3.png";
import TopCategory2 from "../../../public/image/category2.png";
import TopCategory3 from "../../../public/image/Rectangle6.png";

export default function TopCategories() {
  return (
    /* Top Categories Section */
    <div className="absolute flex flex-col justify-between items-start w-[1321px] h-[508] top-[1800px]">
      <h2 className="w-[237px] h-[44px] text-left text-4xl font-semibold text-gray-800 text-nowrap mb-4">
        Top Categories
      </h2>
      <div className="w-[1321px] h-[242px] flex flex-row justify-between mt-3 ">
        {/* Category Card */}
        <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
          {/* Background Image */}
          <Image
            src={TopCategory1}
            alt="Category"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-black/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-medium">Wing Chair</h3>
            <p className="text-sm">3,584 Products</p>
          </div>
        </div>
        <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
          {/* Background Image */}
          <Image
            src={TopCategory2}
            alt="Category"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-black/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-medium">Wooden Chair</h3>
            <p className="text-sm">157 Products</p>
          </div>
        </div>
        <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
          {/* Background Image */}
          <Image
            src={TopCategory3}
            alt="Category"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-black/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-medium">Desk Chair</h3>
            <p className="text-sm">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  )
}