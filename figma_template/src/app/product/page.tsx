import Image from "next/image";
import Feature1 from "../../../public/Image/p1.png";
import Feature2 from "../../../public/Image/p4.png";
import Feature3 from "../../../public/Image/item-category1.png";
import Feature4 from "../../../public/Image/p2.png";
import Feature5 from "../../../public/Image/category2.png";
import Feature6 from "../../../public/Image/p3.png";
import Feature7 from "../../../public/Image/Imagenew.png"
import Feature8 from "../../../public/image/category3.png";
import Feature9 from "../../../public/image/Rectangle6.png";
import buyCart from "../../../public/vectors/Buy 3.png";
import cart from "../../../public/vectors/Buy 2.png";


// import News4 from "../Images/"
export default function Product() {
  return (
    <div className="pt-[300px] w-[1920px] h-[2364px]">
      <div className="flex flex-col pb-0 ">
        {/* row  */}
        <div className="w-[1920px] h-[461px] px-[300px] flex flex-col justify-between ">
          {/* heading */}
          <h2 className="text-left text-2xl font-semibold mb-8">Our Products</h2>
          {/* row 1 */}
          <div className="flex flex-row justify-between items-end w-[1321px] h-[377px]">
            {/* Product list goes here */}

            {/* Product 1 */}
            <div className="w-[312px] h-[377px] flex flex-col p-0 mr-[25px] items-start">
              {/* Image n details */}
              <div className="w-[312px] h-[312px] bg-gray-300 rounded mb-2">
                <Image className="w-[312px] h-[312px] object-cover rounded-md" src={Feature1} alt="Product 1" />
              </div>
              {/* Product Info */}
              <div className="w-[312px] h-[75px] flex flex-row justify-between ">
                <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                  <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                    Library Stool Chair
                  </p>
                  <p className="text-black font-semibold">$20</p>
                </div>
                <div className="w-[44px] h-[44px] rounded-md bg-[#029fae] flex justify-center items-center">
                  <Image src={buyCart} alt="" className="w-[24px] h-[24px] " />
                </div>
              </div>
            </div>


            {/* Product 2 */}
            <div className="w-[312px] h-[377px]  flex flex-col p-0 items-start">
              {/* Product Image */}
              <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
                <Image
                  className="w-[312px] h-[312px] object-cover rounded-md"
                  src={Feature2}
                  alt="Product 2"
                />
              </div>
              {/* Product Info */}
              <div className="w-[312px] h-[75px] flex flex-row justify-between ">
                <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                  <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                    Library Stool Chair
                  </p>
                  <p className="text-black font-semibold">$20</p>
                </div>
                <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                  <Image src={cart} alt="" className="w-[24px] h-[24px] " />
                </div>
              </div>
            </div>


            {/* Product 3 */}
            <div className="-w-[312px] mx-auto h-[377px] flex flex-col p-0 items-start">
              {/* Product Image */}
              <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
                <Image className="w-[312px] h-[312px] object-cover rounded-md" src={Feature3} alt="Product 3"
                />
              </div>
              {/* Product Info */}
              <div className="w-[312px] h-[75px] flex flex-row justify-between ">
                <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                  <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                    Library Stool Chair
                  </p>
                  <p className="text-black font-semibold">$20</p>
                </div>
                <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                  <Image src={cart} alt="" className="w-[24px] h-[24px] " />
                </div>
              </div>
            </div>


            {/* Product 4 */}
            <div className="w-[312px]  h-[377px] flex flex-col p-0 items-start">
              {/* Product Image */}
              <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
                <Image
                  className="w-[312px] h-[312px] object-cover rounded-md"
                  src={Feature4}
                  alt="Product 4"
                />
              </div>
              {/* Product Info */}
              <div className="w-[312px] h-[75px] flex flex-row justify-between ">
                <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                  <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                    Library Stool Chair
                  </p>
                  <p className="text-black font-semibold">$20</p>
                </div>
                <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                  <Image src={cart} alt="" className="w-[24px] h-[24px] " />
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* row 2 */}
        <div className="w-[1321px] h-[461px] px-[300px] flex flex-row justify-between items-end ">

          {/* Product list goes here */}

          {/* Product 1 */}
          <div className="w-[312px] h-[377px] flex flex-col p-0 mr-[25px] items-start">
            {/* Image n details */}
            <div className="w-[312px] h-[312px] bg-gray-300 rounded mb-2">
              <Image className="w-[312px] h-[312px] object-cover rounded-md" src={Feature5} alt="Product 1" />
            </div>
            {/* Product Info */}
            <div className="w-[312px] h-[75px] flex flex-row justify-between ">
              <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-black font-semibold">$20</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-md bg-[#029fae] flex justify-center items-center">
                <Image src={buyCart} alt="" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>


          {/* Product 2 */}
          <div className="w-[312px] h-[377px]  flex flex-col p-0 items-start">
            {/* Product Image */}
            <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
              <Image
                className="w-[312px] h-[312px] object-cover rounded-md"
                src={Feature6}
                alt="Product 2"
              />
            </div>
            {/* Product Info */}
            <div className="w-[312px] h-[75px] flex flex-row justify-between ">
              <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-black font-semibold">$20</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                <Image src={cart} alt="" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>


          {/* Product 3 */}
          <div className="-w-[312px] mx-auto h-[377px] flex flex-col p-0 items-start">
            {/* Product Image */}
            <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
              <Image className="w-[312px] h-[312px] object-cover rounded-md" src={Feature7} alt="Product 3"
              />
            </div>
            {/* Product Info */}
            <div className="w-[312px] h-[75px] flex flex-row justify-between ">
              <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-black font-semibold">$20</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                <Image src={cart} alt="" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>


          {/* Product 4 */}
          <div className="w-[312px]  h-[377px] flex flex-col p-0 items-start">
            {/* Product Image */}
            <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
              <Image
                className="w-[312px] h-[312px] object-cover rounded-md"
                src={Feature1}
                alt="Product 4"
              />
            </div>
            {/* Product Info */}
            <div className="w-[312px] h-[75px] flex flex-row justify-between ">
              <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-black font-semibold">$20</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                <Image src={cart} alt="" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>

        </div>
        {/* row 3 */}
        <div className="w-[1321px] h-[461px] px-[300px] flex flex-row justify-between items-end ">

          {/* Product list goes here */}

          {/* Product 1 */}
          <div className="w-[312px] h-[377px] flex flex-col p-0 mr-[25px] items-start">
            {/* Image n details */}
            <div className="w-[312px] h-[312px] bg-gray-300 rounded mb-2">
              <Image className="w-[312px] h-[312px] object-cover rounded-md" src={Feature8} alt="Product 1" />
            </div>
            {/* Product Info */}
            <div className="w-[312px] h-[75px] flex flex-row justify-between ">
              <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-black font-semibold">$20</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-md bg-[#029fae] flex justify-center items-center">
                <Image src={buyCart} alt="" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>


          {/* Product 2 */}
          <div className="w-[312px] h-[377px]  flex flex-col p-0 items-start">
            {/* Product Image */}
            <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
              <Image
                className="w-[312px] h-[312px] object-cover rounded-md"
                src={Feature2}
                alt="Product 2"
              />
            </div>
            {/* Product Info */}
            <div className="w-[312px] h-[75px] flex flex-row justify-between ">
              <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-black font-semibold">$20</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                <Image src={cart} alt="" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>


          {/* Product 3 */}
          <div className="-w-[312px] mx-auto h-[377px] flex flex-col p-0 items-start">
            {/* Product Image */}
            <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
              <Image className="w-[312px] h-[312px] object-cover rounded-md" src={Feature3} alt="Product 3"
              />
            </div>
            {/* Product Info */}
            <div className="w-[312px] h-[75px] flex flex-row justify-between ">
              <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-black font-semibold">$20</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                <Image src={cart} alt="" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>


          {/* Product 4 */}
          <div className="w-[312px]  h-[377px] flex flex-col p-0 items-start">
            {/* Product Image */}
            <div className="w-[312px] h-[312px] bg-gray-300 rounded-md mb-2">
              <Image
                className="w-[312px] h-[312px] object-cover rounded-md"
                src={Feature9}
                alt="Product 4"
              />
            </div>
            {/* Product Info */}
            <div className="w-[312px] h-[75px] flex flex-row justify-between ">
              <div className="w-[256px] h-[51px] flex flex-col justify-between items-start ">
                <p className="w-[256px] h-[21px] text-lg font-[16px] text-gray-700">
                  Library Stool Chair
                </p>
                <p className="text-black font-semibold">$20</p>
              </div>
              <div className="w-[44px] h-[44px] rounded-md  flex justify-center items-center">
                <Image src={cart} alt="" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
