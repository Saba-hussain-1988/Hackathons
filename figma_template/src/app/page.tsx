import Image from "next/image";
import HeroSection from "./components/heroSection";
import LogoSection from "./components/logo_section";
import FeatureProducts from "./components/featureProducts";
import ProductsSection from "./components/productsComponent";
import Feature1 from "../../public/Image/p1.png";
import Feature2 from "../../public/Image/p5.png";
import Feature3 from "../../public/Image/item-category 1.png";
import Feature4 from "../../public/Image/p2.png";
import Explore1 from "../../public/Image/item-category 1.png";

export default function Home() {
  return (
    // main page style
    <div className="w-[1920px] h-[4276px] px-[300px] flex flex-col">

     {/* Calling Hero section  */}
     <HeroSection />

     {/* calling Logo section */}
     <LogoSection />

     {/* calling feature product component */}
     <FeatureProducts />
      
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        {/* Main Container */}
        <div className="max-w-[1321px] w-full">
          

          {/* Explore Styles Section */}
          <section className="py-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Explore New and Popular Styles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 p-4">
              {/* Large Featured Box */}
              <div className="col-span-1 md:col-span-2 bg-gray-300 rounded-lg w-full h-auto">
                <Image
                  src={Explore1.src}
                  alt=""
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Smaller Boxes */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-300 rounded-lg w-full h-auto">
                  <Image
                    src={Feature1.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="bg-gray-300 rounded-lg w-full h-auto">
                  <Image
                    src={Feature2.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="bg-gray-300 rounded-lg w-full h-auto">
                  <Image
                    src={Feature3.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="bg-gray-300 rounded-lg w-full h-auto">
                  <Image
                    src={Feature4.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ProductsSection />
    </div>
  );
}