import Image from "next/image"
import Feature1 from "../../../public/image/p2.png";
import Feature2 from "../../../public/image/p1.png";
import Feature3 from "../../../public/image/item-category1.png";
import Feature4 from "../../../public/image/p1.png";


export default function Vertical(){
    return(
        
          /* Explore Styles Section */
          <div className="absolute py-10  top-[2180px]">
            <h2 className="relative w-[648px] h-[52px] left-0 top-[648px] text-center text-[34px] leading-[40px] text-black uppercase font-roboto rotate-[-90deg]">
              Explore New and Popular Styles
            </h2>
            <div className="absolute w-[1320px] h-[648px] p-0  m-0 top-[300px]">
              {/* Large Featured Box */}
              <div className="absolute w-[648px] h-[648px] mt-0 ml-0 ">
                <Image
                  src={Feature3}
                  alt="Product"
                  className="w-[648px] h-[648px]"
                />
              </div>

              {/* Smaller Boxes */}
              
                <div className=" absolute w-[312px] h-[312px] ml-[672px] mt-0">
                  <Image
                    src={Feature1}
                    alt=""
                    className="w-[312px] h-[312px] "
                  />
                </div>
                <div className="absolute w-[312px] h-[312px] ml-[1008px] mt-0">
                  <Image
                    src={Feature2}
                    alt=""
                    className="w-full h-auto "
                  />
                </div>
                <div className="absolute w-[312px] h-[312px] ml-[672px] mt-[336px]">
                  <Image
                    src={Feature3}
                    alt=""
                    className="w-full h-auto "
                  />
                </div>
                <div className="absolute w-[312px] h-[312px] ml-[1008px] mt-[336px]">
                  <Image
                    src={Feature4}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>
              
            </div>
          </div>
    )
}