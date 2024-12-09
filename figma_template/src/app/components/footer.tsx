import Image from "next/image";
import Logo from "../../../public/icons/Logo (2).png";
import Facebook from "../../../public/icons/Facebook---Negative 2.png";
import Twitter from "../../../public/icons/Twitter.png"
import Instagram from "../../../public/icons/Instagram.png";
import Pinterest from "../../../public/icons/Pinterest.png";
import Youtube from "../../../public/icons/YouTube.png";
import fLogo1 from "../../../public/logos/Group 11.png"
import fLogo2 from "../../../public/logos/Group 12.png"
import foLgo3 from "../../../public/logos/group12.png"
import fLogo4 from "../../../public/logos/Union.png"


export default function Footer (){
  return (
    // main footer
    <div className="absolute w-[1920px] h-[418px] ">
      {/* upper footer portion */}
      <div className="absolute w-[1920px] h-[343px] flex flex-row justify-between items-center px-[300px] py-[100px] border-2">
    <div className="absolute flex flex-col items-start gap-6 w-[350px] h-[198px]">
        {/* <!-- Logo Section --> */}
        <div className="flex items-center w-[168px] h-[40px]">
            {/* <!-- Logo Icon --> */}
            <Image src={Logo} alt="logo" className="w-[168px] h-[40px]"/>
        </div>

        {/* <!-- Description --> */}
        <p className="w-[350px] h-[72px] text-[16px] font-inter font-normal leading-[24px] opacity-60">
          Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
        </p>

        {/* <!-- Social Links --> */}
        <div className="flex items-start gap-1 w-[206px] h-[38px]">
          {/* <!-- Facebook --> */}
          <div className="relative w-[38px] h-[38px] bg-[#FFFFFF] hover:border border-[#007580] rounded-[50%]">
          <Image src={Facebook} alt="Facebook" className="absolute w-[16px] h-[16px] left-[11px] top-[11px] "/>
          </div>
      
          {/* <!-- Twitter --> */}
          <div className="relative w-[38px] h-[38px] bg-[#FFFFFF] hover:border border-[#007580] rounded-[50%]">
          <Image src={Twitter} alt=" Twitter" className="absolute w-[16px] h-[16px] left-[11px] top-[11px] "/>
          </div>
      
          {/* <!-- Instagram --> */}
          <div className="relative w-[38px] h-[38px] bg-[#FFFFFF] hover:border border-[#007580] rounded-[50%]">
          <Image src={Instagram} alt="Instagram" className="absolute w-[16px] h-[16px] left-[11px] top-[11px] "/>
          </div>
      
          {/* <!-- Pinterest --> */}
          <div className="relative w-[38px] h-[38px]  hover:border border-[#007580] rounded-[50%]">
          <Image src={Pinterest} alt="Pinterest" className="absolute w-[16px] h-[16px] left-[11px] top-[11px]"/>
          </div>
      
          {/* <!-- YouTube --> */}
          <div className="relative w-[38px] h-[38px]  hover:border border-[#007580] rounded-[50%]">
            <Image src={Youtube} alt="YouTube" className="absolute w-[16px] h-[16px] left-[11px] top-[11px]"/>
          </div>
        </div>

        </div>

        {/*Footer second column  */}
        <div className="absolute flex flex-col items-start gap-5 w-[105px] h-[203px] ml-[440px]">
          {/* <!-- Category --> */}
        <div className="text-[#9A9CAA] font-inter font-medium text-[14px] leading-[110%] tracking-[0.06em] uppercase w-[82px] h-[15px]">
    Category
  </div>

  {/* <!-- Frame 10 --> */}
  <div className="flex flex-col items-start gap-3 w-[105px] h-[168px]">
    {/* <!-- Sofa --> */}
    <div className="text-[#272343] font-inter font-normal text-[16px] leading-[110%] w-[35px] h-[18px]">
      Sofa
    </div>

    {/* <!-- Armchair --> */}
    <div className="text-[#272343] font-inter font-normal text-[16px] leading-[110%] w-[68px] h-[18px]">
      Armchair
    </div>

    {/* <!-- Wing Chair --> */}
    <div className="text-[#272343] font-normal text-[16px] leading-[110%] w-[83px] h-[18px]">
      Wing Chair
    </div>

    {/* <!-- Desk Chair --> */}
    <div className="text-[#007580] font-inter font-normal text-[16px] leading-[110%] underline w-[83px] h-[18px]">
      Desk Chair
    </div>

    {/* <!-- Wooden Chair --> */}
    <div className="text-[#272343] font-inter font-normal text-[16px] leading-[110%] w-[105px] h-[18px]">
      Wooden Chair
    </div>

    {/* <!-- Park Bench --> */}
    <div className="text-[#272343] font-inter font-normal text-[16px] leading-[110%] w-[86px] h-[18px]">
      Park Bench
    </div>
  </div>
        </div>


{/* footer third column */}
<div className="absolute  ml-[640px] flex flex-col items-start gap-5">
  {/* <!-- Support --> */}
  <div className="text-[14px] font-medium uppercase tracking-[0.06em] leading-[110%] text-[#9A9CAA]">
    Support
  </div>

  {/* <!-- Frame 10 --> */}
  <div className="flex flex-col items-start gap-3 w-[156px] h-[108px]">
    {/* <!-- Help & Support --> */}
    <div className="text-[16px] font-normal leading-[110%] text-[#272343] w-[115px] h-[18px]">
      Help & Support
    </div>
    {/* <!-- Terms & Conditions --> */}
    <div className="text-[16px] font-normal leading-[110%] text-[#272343] w-[156px] h-[18px]">
      Terms & Conditions
    </div>
    {/* <!-- Privacy Policy --> */}
    <div className="text-[16px] font-normal leading-[110%] text-[#272343] w-[105px] h-[18px]">
      Privacy Policy
    </div>
    {/* <!-- Help --> */}
    <div className="text-[16px] font-normal leading-[110%] text-[#272343] w-[35px] h-[18px]">
      Help
    </div>
  </div>
</div>

{/* footer forth column */}
<div className="absolute w-[424px] h-[142px] ml-[650px] flex flex-col items-start gap-5">
  {/* <!-- Newsletter --> */}
  <div className="absolute w-[102] h-[15px] text-[14px] font-medium uppercase  my-[5px] ml-[250px] text-[#9A9CAA]">
    Newsletter
  </div>

  {/* <!-- Input Field and Button --> */}
  <div className="absolute flex flex-row items-center mt-[40px] gap-5 ">
    {/* <!-- Input Field --> */}
    <div className="absolute flex items-center w-[285px] h-[46px] ml-[250px] bg-white border border-[#E1E3E6] rounded-[8px]">
      <input 
        type="email" 
        placeholder="Your email" 
        className="w-full h-full px-4 text-[16px] text-[#9A9CAA] font-normal leading-[100%] bg-transparent border-none outline-none placeholder:text-[#9A9CAA]"
      />
    </div>

    {/* <!-- Button --> */}
    <button className=" w-[127px] h-[46px] flex items-center justify-center px-6 py-3 bg-[#029FAE] ml-[530px] rounded-[8px] text-[16px] font-medium text-white ">
      Subscribe
    </button>
  </div>

  {/* <!-- Description --> */}
  <p className="absolute w-[424px] h-[46px] text-[15px] font-normal ml-[250px] mt-[100px] text-[#272343] text-wrap opacity-60">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
  </p>
</div>

    
    </div>


 {/* bottom footer */}
<footer className="absolute flex items-center justify-between px-[300px] py-[24px] w-[1920px] h-[75px] top-[343px] bg-white  ">
  {/* <!-- Left Text --> */}
  <p className="text-[14px] font-normal leading-[21px] text-[#9A9CAA] text-nowrap">
    © 2021 - Blogy - Designed & Developed by Zakirsoft
  </p>

  {/* <!-- Logo Section --> */}
  <div className="flex items-center gap-2 opacity-50">
    {/* <!-- Logo 1 --> */}
    <Image src={fLogo1} alt="Logo" className="w-[36px] h-[22.25px] "/>
    <Image src={fLogo2} alt="logo" className="w-[56px] h-[14.92px] "/>
    {/* <!-- Logo 2 --> */}
    <Image src={foLgo3} alt="logo" className="w-[50px] h-[27px] "/>
    {/* <!-- Placeholder Logos --> */}
    <Image src={fLogo4} alt="logo" className="w-[55px] h-[17.84px] "/>
    </div>
</footer>


    </div>
  );
};
