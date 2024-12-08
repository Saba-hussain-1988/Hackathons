import Image from "next/image"
import productCategory from "../../../public/images/item-category 1.png"
import p1 from "../../../public/images/p1.png"
import p2 from "../../../public/images/p2.png"
import p3 from "../../../public/images/p3.png"
import p4 from "../../../public/images/p4.png"

interface IData {
    key:number,
    image: any,
    name: string,
    productNo: string,
}
const dataObject:IData[]=[
        {key:1 , image: "/images/p1.png", name: "Pants" , productNo: "200 Product",},
        {key:2 , image: "/public/images/p2.png", name: "Jacket", productNo: "103 Product",},
        {key:3 , image: "../../../public/images/p3.png", name: "Shirt", productNo: "320 Product",},
        {key:4 , image: "p4.png", name: "Jacket", productNo: "103 Product" ,}
    ]

export default function (){
    
    
    return(
        <div className="absolute w-[1920px] h-[648px] flex flex-row order-2 top-[1300px] gap-[50px]">
            <div className="absolute w-[648px] h-[52px] left-[-52px] top-[300px] text-center text-[34px] leading-[40px] text-black uppercase font-roboto rotate-[-90deg] order-1">
                Explore new and popular styles
            </div>
            <div className="absolute w-[648px] h-[648px] left-[300px] gap-[24px] order-2">
                <div className="absolute w-[648px] h-[648px]">
                <Image src={productCategory} alt="Category Product" className="absolute w-[648px] h-[648px] left-0 top-0" />
                </div>
            </div>
                {/* Cards Grid */}
                <div className="w-[648px] h-[324px] flex justify-between flex-wrap ml-[970px] gap-[24px] order-3">
                {dataObject.map((item) => (
                    <div key={item.key} className="relative w-[312px] h-[312px] border rounded-lg shadow-lg">
                    {/* Image */}
                      <div className=" w-[312px] h-[312px] bg-center bg-cover"
                        style={{ backgroundImage: `url(${item.image})` }}></div>
      
                    {/* Ribbon */}
                      <div className="absolute w-[52px] h-[24px] left-0 top-[22px] bg-[#FF6F61] items-center justify-center rounded opacity-0 group-hover:opacity-[100%] transition-opacity">
                        <span className="text-[12px] font-sans font-semibold text-white uppercase">
                          HOT
                        </span>
                    </div>
      
                    {/* Bottom Category */}
                   <div className="absolute w-full h-[52px] left-0 bottom-0 bg-[#1E2832] border border-[#1E2832] flex-row justify-between items-center px-[14px] py-[15px] opacity-0 group-hover:opacity-[100%] transition-opacity">
                     {/* Product Name */}
                     <div className="text-[16px] font-sans font-semibold leading-[22px] text-white capitalize">
                       {item.name}
                     </div>
       
                     {/* Product Number */}
                     <div className="text-[16px] font-sans font-semibold leading-[22px] text-white capitalize text-right">
                       {item.productNo}
                     </div>
                   </div>
                    </div>
                ))}
                </div>
            
        </div>
    )
}