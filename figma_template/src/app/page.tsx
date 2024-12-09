import HeroSection from "./components/heroSection";
import LogoSection from "./components/logo_section";
import FeatureProducts from "./components/featureProducts";
import TopCategories from "./components/topCategories";
import ProductsSection from "./components/productsComponent";
import Vertical from "./components/exploreStyle";

export default function Home() {
  return (
    // main page style
    <div className="w-[1920px] h-[4276px] px-[300px] flex flex-col  gap-[80px] border-b-2">

     {/* Calling Hero section  */}
     <HeroSection />

     {/* calling Logo section */}
     <LogoSection />

     {/* calling feature product component */}
     <FeatureProducts />

     {/* Top Category section */}
     <TopCategories />
      
      {/* explore style */}
      <Vertical />
     
     {/* Products component */}
      <ProductsSection />
    </div>
  );
}