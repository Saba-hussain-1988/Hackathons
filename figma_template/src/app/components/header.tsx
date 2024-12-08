import Image from "next/image";
import check1 from "../../../public/vectors/Vector.png";
import dropDown from "../../../public/vectors/Vector (1).png";
import _circle from "../../../public/vectors/alert-circle 1.png"
import logoIcon from "../../../public/icons/Logo (2).png";
import cart from "../../../public/vectors/Buy 2.png"
import NoIcon from "../../../public/icons/No.png"
import Link from "next/link";


export default function Header(){
    return (
        <div className="absolute flex flex-col items-center w-[1920px] h-[203px] top-0 left-0 bg-white p-0">
          {/* <!-- Header content --> */}
          <div className="flex flex-row justify-between items-center px-[300px] py-[14px] gap-[798px] w-[1920px] h-[45px] bg-[#272343]">
            {/* <!-- Top Header --> */}
            <div className="flex flex-row items-center gap-[8px] w-[255px] h-[16px] opacity-70 mx-auto p-0">
              {/* <!-- Shipping Content goes here --> */}
              <div className="w-[16px] h-[16px]">
                {/* <!-- Check mark --> */}
                <Image src={check1} alt="check mark" className="absolute left-[16.67%] right-[16.67%] top-[25%] bottom-[29.17%]" />
              </div>
              <p className="w-[231px] h-[14px] font-inter font-normal text-[13px] leading-[110%] capitalize text-white">
                Free shipping on all orders over $50
              </p>
             
            </div>
          <div className="flex flex-row items-start gap-[24px] w-[202px] h-[17px] opacity-70 mx-auto p-0">
            {/* <!-- top header right side Content goes here --> */}
            <div className="flex flex-row items-center gap-[6px] w-[37px] h-[17px] p-0">
              {/* <!-- English --> */}
              <p className="w-[24px] h-[17px] font-inter font-normal text-[13px] leading-[130%] text-center text-white">
              Eng
              </p>
              <Image src={dropDown} alt="drop down" className="w-[7px] h-[3.5px]"/>
            </div>
            <p className="w-[30px] h-[17px] font-inter font-normal text-[13px] leading-[130%] text-center text-white">
              Faqs
            </p>
            <div className="flex flex-row items-start gap-[6px] w-[87px] h-[17px] p-0">
              {/* <!-- Need help Content --> */}
              <Image src={_circle} alt="alert vector" className="w-[16px] h-[16px] opacity-70" />
              <p className="w-[65px] h-[17px] font-inter font-normal text-[13px] leading-[130%] text-center text-white">
                Need Help
              </p>
            
            </div>
         
         
          </div>
         
         
          </div>
          <div className="flex flex-row justify-between items-center px-[300px] py-[20px] gap-[302px] w-[1920px] h-[84px] bg-[#F0F2F3]">
            {/* <!-- Middle Header Content here -->*/}
            
            {/* <!-- Logo icon and text --> */}
            <Image src={logoIcon} alt="Logo Icon" className="w-[166px] h-[40px]" />
            <div className="flex flex-row justify-center items-center p-[11px_16px] gap-[12px] w-[120px] h-[44px] bg-white rounded-[8px]">
              {/* <!-- User links --> */}
              <div className="flex flex-row items-center gap-[8px] w-[56px] h-[22px] p-0">
                {/* <!-- Cart --> */}
                <Image src={cart} alt="cart" className="w-[22px] h-[22px]" />
                <div className="w-[26px] h-[13px] font-inter font-medium text-[12px] leading-[110%] text-center capitalize text-[#272343] flex-none order-1 flex-grow-0">
                  Cart
                </div>
              </div>
              <Image src={NoIcon} alt="Number icon" className="w-[20px] h-[20px]" />
            </div>
          </div> 
          <div className="flex flex-row justify-between items-center px-[300px] py-[14px] gap-[478px] w-[1920px] h-[74px] bg-white shadow-[0_1px_0_#E1E3E6]">
            {/* <!-- Nav Bar --> */}
            <ul className="flex flex-row items-center p-0 gap-[32px] mx-auto w-[339px] h-[15px] ">
            {/* <!-- Content here --> */}
            <li className="w-[40px] h-[15px] font-inter font-medium text-[14px] leading-[110%] capitalize text-[#636270] hover:text-[#007580] ">
              <Link href={"/"} >Home</Link>
            </li>
            <li className="w-[35px] h-[15px] font-inter font-medium text-[14px] leading-[110%] capitalize text-[#636270] hover:text-[#007580] ">
              <Link href={"/"} >Shop</Link>
            </li>
            <li className="w-[53px] h-[15px] font-inter font-medium text-[14px] leading-[110%] capitalize text-[#636270] hover:text-[#007580] ">
              <Link href={"/"} >Product</Link>
            </li>
            <li className="w-[42px] h-[15px] font-inter font-medium text-[14px] leading-[110%] capitalize text-[#636270] hover:text-[#007580] ">
              <Link href={"/"} >Pages</Link>
            </li>
            <li className="w-[41px] h-[15px] font-inter font-medium text-[14px] leading-[110%] capitalize text-[#636270] hover:text-[#007580] ">
              <Link href={"/"} >About</Link>
            </li>
            </ul>
            {/* buttom border right section contact */}
            <div className="flex flex-row items-start p-0 gap-2 mx-auto w-42 h-[15px] ">
            <span className="w-[57px] h-[15px] font-inter font-normal text-[14px] leading-[110%] capitalize text-[#636270] flex-none order-0 grow-0">
              {/* <!-- Text here --> */}
              Contact:
            </span>
            
            <span className="w-[103px] h-[15px] font-inter font-medium text-[14px] leading-[110%] capitalize text-[#272343] flex-none order-1 grow-0">
              (808) 555-0111
            </span>
            
            </div>
         
         
          </div>


        </div>

    )
}