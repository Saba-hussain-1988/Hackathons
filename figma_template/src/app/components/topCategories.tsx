import Image from "next/image";
import TopCategory1 from "../../public/Image/category3.png";
import TopCategory2 from "../../public/Image/category2.png";
import TopCategory3 from "../../public/Image/Rectangle 6.png";

export default function TopCategories(){
    return(
        /* Top Categories Section */
        <section className="">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category Card */}
          <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={TopCategory1.src}
              alt="Category"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-lg font-medium">Wing Chair</h3>
              <p className="text-sm">3,584 Products</p>
            </div>
          </div>
          <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={TopCategory2.src}
              alt="Category"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-lg font-medium">Wooden Chair</h3>
              <p className="text-sm">157 Products</p>
            </div>
          </div>
          <div className="relative rounded-lg w-full max-w-[424px] mx-auto h-[300px] sm:h-[424px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={TopCategory3.src}
              alt="Category"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-lg font-medium">Desk Chair</h3>
              <p className="text-sm">154 Products</p>
            </div>
          </div>
        </div>
      </section>
    )
}