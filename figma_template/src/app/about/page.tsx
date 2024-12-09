import React from "react";
import Image from "next/image";
import p1 from "../../../public/Image/p1.png"
import p2 from "../../../public/Image/black.png"
import p3 from "../../../public/Image/image2.png"
import p4 from "../../../public/Image/sofa.png"
import icon1 from "../../../public/logos/Checkmark--outline.png"
import icon2 from "../../../public/logos/Delivery.png"
import icon3 from "../../../public/logos/Purchase.png"
import icon4 from "../../../public/logos/Sprout.png"

export default function AboutUs() {
  return (
    <div className="w-[1920px] h-[1812px] flex flex-col justify-center items-center gap-[100px]">
      <div className="flex items-center flex-nowrap gap-[20px">
        {/* front portion */}
        <div
          className="absolute bg-[#007580] w-[672px] h-[478px] mt-[200px] mr-[20px] ml-[300px] sm:left-[20px] sm:top-[100px] p-8 ">
          {/* <!-- Top Content --> */}
          <div className="flex flex-col items-start gap-3">
            {/* <!-- Heading --> */}
            <h1
              className="text-white font-inter font-bold text-[32px] leading-[39px] max-w-[325px]">
              About Us- Comforty
            </h1>
            {/* <!-- Description --> */}
            <p
              className="text-white font-inter font-normal text-[18px] leading-[22px] max-w-[495px] text-wrap">
              At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
            </p>
          </div>
          {/* <!-- Button --> */}
          <div
            className="flex items-center justify-start px-8 py-4 gap-2 w-[179px] h-[56px] bg-white/15">
            <span className="text-white font-inter font-normal text-[16px] leading-[24px]">
              Button
            </span>
          </div>
        </div>

        <Image src={p1} alt="Product picture" className="absolute  w-[619px] h-[478px] mt-0" />
      </div>

      <div className="flex flex-col justify-center">
        {/* blogs */}
        <div
          className="absolute w-full max-w-[501px] h-auto max-h-[35px] left-[750px] top-[913px] sm:left-[20px] sm:top-[1200px] text-[32px] leading-[110%] font-inter font-semibold capitalize text-[#272343]">
          What makes our Brand Different
        </div>
        <div
          className="absolute w-full max-w-[1320px] flex flex-wrap justify-center gap-4 top-[996px] sm:top-[1200px] px-4 mx-auto">
          {/* <!-- Feature Block 1 --> */}
          <div
            className="flex flex-col items-start p-12 gap-2 w-full max-w-[309px] h-auto bg-[#F9F9F9]">
            {/* <!-- Icon --> */}
            <div
              className="w-[213px] h-[148px] bg-white bg-blend-multiply flex items-center justify-center">
              <Image src={icon2} alt="delivery" className="w-[24px] h-[24px] " />
            </div>
            {/* <!-- Title --> */}
            <h4
              className="text-[#007580] font-inter font-normal text-[20px] leading-[140%]">
              Next day as standard
            </h4>
            {/* <!-- Description --> */}
            <p
              className="text-[#007580] font-inter font-normal text-[16px] leading-[150%]">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          {/* <!-- Feature Block 2 --> */}
          <div
            className="flex flex-col items-start p-12 gap-2 w-full max-w-[309px] h-auto bg-[#F9F9F9]">
            {/* <!-- Icon --> */}
            <div
              className="w-[213px] h-[148px] bg-white bg-blend-multiply flex items-center justify-center">
              <Image src={icon1} alt="check mark" className="w-[24px] h-[24px]" />
            </div>
            {/* <!-- Title --> */}
            <h4
              className="text-[#007580] font-inter font-normal text-[20px] leading-[140%]">
              Made by true artisans
            </h4>
            {/* <!-- Description --> */}
            <p
              className="text-[#007580] font-inter font-normal text-[16px] leading-[150%]">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          {/* <!-- Feature Block 3 --> */}
          <div
            className="flex flex-col items-start p-12 gap-2 w-full max-w-[309px] h-auto bg-[#F9F9F9]">
            {/* <!-- Icon --> */}
            <div
              className="w-[213px] h-[148px] bg-white bg-blend-multiply flex items-center justify-center">
              <Image src={icon3} alt="purchase" className="w-[24px] h-[24px]" />
            </div>
            {/* <!-- Title --> */}
            <h4
              className="text-[#007580] font-inter font-normal text-[20px] leading-[140%]">
              Unbeatable prices
            </h4>
            {/* <!-- Description --> */}
            <p
              className="text-[#007580] font-inter font-normal text-[16px] leading-[150%]">
              For our materials and quality, you won’t find better prices anywhere.
            </p>
          </div>
          {/* <!-- Feature Block 4 --> */}
          <div
            className="flex flex-col items-start p-12 gap-2 w-full max-w-[309px] h-auto bg-[#F9F9F9]">
            {/* <!-- Icon --> */}
            <div
              className="w-[213px] h-[148px] bg-white bg-blend-multiply flex items-center justify-center">
              <Image src={icon4} alt="Sprout" className="w-[24px] h-[24px] " />
            </div>
            {/* <!-- Title --> */}
            <h4
              className="text-[#007580] font-clash-display font-normal text-[20px] leading-[140%]">
              Recycled packaging
            </h4>
            {/* <!-- Description --> */}
            <p
              className="text-[#007580] font-satoshi font-normal text-[16px] leading-[150%]">
              We use 100% recycled materials to ensure our footprint is more manageable.
            </p>
          </div>
        </div>


      </div>

      <div>
        {/* third part */}
        <div
          className="absolute w-full max-w-[332px] h-auto max-h-[35px] left-[320px] top-[1371px] sm:left-[20px] sm:top-[1600px] text-[32px] leading-[110%] font-inter font-semibold capitalize text-[#272343]">
          Our Popular Products
        </div>
        <div>
          <div className="absolute flex flex-col items-start gap-6 w-full max-w-[630px] h-auto max-h-[462px] left-1/2 top-[calc(50%+463px)] transform -translate-x-[325px]">
            {/* <!-- Product Image --> */}
            <Image src={p4} alt="Product sofa" className="w-full max-w-[630px] h-[375px]" />

            {/* <!-- Product Details --> */}
            <div className="flex flex-col items-start gap-2 w-full max-w-[212px] h-auto">
              {/* <!-- Product Title --> */}
              <h3 className="w-full max-w-[212px] text-[20px] leading-[140%] font-inter font-normal text-[#2A254B]">
                The Poplar suede sofa
              </h3>

              {/* <!-- Product Price --> */}
              <span className="w-full max-w-[61px] text-[18px] leading-[150%] font-inter font-normal text-[#2A254B]">
                £980
              </span>
            </div>
          </div>
          <div className="absolute flex flex-col items-start gap-6 w-full max-w-[305px] h-auto max-h-[462px] left-[calc(50%+487.5px)] top-[calc(50%+465px)]">
            {/* <!-- Parent Image Container --> */}
            <div className="relative w-full max-w-[305px] h-[375px]">
              {/* <!-- Photo  */}
              <Image src={p2} alt="product chair" className="absolute inset-0 bg-[url('/path/to/photo.jpg')] bg-cover bg-center" />
            </div>

            {/* <!-- Product Details --> */}
            <div className="flex flex-col items-start gap-2 w-full max-w-[155px] h-auto">
              {/* <!-- Product Title --> */}
              <h3 className="text-[20px] leading-[140%] font-inter font-normal text-[#2A254B]">
                The Dandy chair
              </h3>

              {/* <!-- Product Price --> */}
              <span className="text-[18px] leading-[150%] font-inter font-normal text-[#2A254B]">
                £250
              </span>
            </div>
          </div>
          <div className="absolute flex flex-col items-start gap-6 w-full max-w-[305px] h-auto max-h-[462px] left-[calc(50%-152.5px)] top-[calc(50%+465px)]">
            {/* <!-- Parent Container --> */}
            <Image src={p3} alt="product image" className="relative w-full h-[375px] bg-[#F6F6F6] " />

            {/* <!-- Details Section --> */}
            <div className="flex flex-col items-start gap-2 w-full max-w-[155px] h-auto">
              {/* <!-- Product Name --> */}
              <h3 className="text-[20px] leading-[140%] font-inter font-normal text-[#2A254B]">
                The Dandy chair
              </h3>
              {/* <!-- Price --> */}
              <span className="text-[18px] leading-[150%] font-inter font-normal text-[#2A254B]">
                £250
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
