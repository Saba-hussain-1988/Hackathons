import Image from "next/image"
import productImage from "../../../public/image/Product Image.png"

export default function HeroSection() {
  return (
    /* Header */
    <div className="absolute h-[850px] w-[1321px] left-[300px] top-[204px] bg-[#f0f2f3] rounded-bl-[30px]">
      <div className=" w-[557px] h-[337px] left-[70px] top-[229px] flex items-center">
        {/* <!-- Hero Info Content --> */}

        <span className="absolute w-[177px] h-[14px] left-[70px] top-[229px] font-inter font-normal text-[14px] leading-[100%] tracking-[0.12em] uppercase text-[#272343] text-nowrap">
          Welcome to chairy
        </span>
        <h1 className="absolute w-[557px] h-[198px] left-[70px] top-[267px] font-inter font-bold text-[60px] leading-[110%] capitalize text-[#272343]">
          Best Furniture Collection for your interior.
        </h1>
        <button className="absolute flex flex-row justify-center items-center px-6 py-[14px] gap-5 w-[171px] h-[52px] left-[70px] top-[514px] text-white bg-[#029FAE] rounded-lg">
          Shop Now
        </button>
      </div>

      {/* Image on right side */}
      <Image src={productImage} alt="Product Image" className="absolute w-[434px] h-[584px] left-[777px] top-[115px] " />

    </div>
  )
}