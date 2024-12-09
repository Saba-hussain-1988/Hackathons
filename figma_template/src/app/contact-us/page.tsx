import Image from "next/image";

export default function Contact() {
    return (
        <div className="w-[1920px] h-[1500px] flex flex-col justify-center">
            <div className="absolute w-[1440px] h-[1144px] left-[240px] top-[150px] bg-white">
                {/* <!-- Rectangle 50 --> */}
                <div className="absolute w-[1440px] h-[1144px] left-0 top-0 bg-white"></div>

                {/* <!-- Get In Touch With Us --> */}
                <h2 className="absolute w-[375px] h-[54px] left-[773px] top-[301px] text-center font-poppins font-semibold text-[36px] leading-[54px] text-black">
                    Get In Touch With Us
                </h2>

                {/* <!-- Information Paragraph --> */}
                <p className="absolute w-[644px] h-[48px] left-[638px] top-[362px] font-poppins font-normal text-[16px] leading-[24px] text-center text-[#9F9F9F]">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>

                {/* <!-- Group 161 --> */}
                <div className="absolute w-[1058px] h-[923px] left-[431px] top-[424px]">
                    {/* <!-- Group 155 --> */}
                    <div className="absolute w-[393px] h-[537px] left-[0px] top-[68px] bg-white">
                        {/* <!-- Icon --> */}
                        <div className="absolute left-[25.26%] top-[26.47%] w-[30px] h-[30px] bg-black"></div>

                        {/* <!-- Address --> */}
                        <h3 className="absolute w-[99px] h-[36px] left-[106px] top-[126px] font-poppins font-medium text-[24px] leading-[36px] text-black">
                            Address
                        </h3>
                        <p className="absolute w-[212px] h-[57px] left-[106px] top-[162px] font-inter font-normal text-[16px] leading-[19px] text-black">
                            236 5th SE Avenue, New York NY10000, United States
                        </p>
                    </div>

                    {/* <!-- Phone Section --> */}
                    <div className="absolute w-[393px] h-[537px] left-[0px] top-[400px] bg-white">
                        <h3 className="absolute w-[76px] h-[36px] left-[106px] top-[206px] font-poppins font-medium text-[24px] leading-[36px] text-black">
                            Phone
                        </h3>
                        <p className="absolute w-[212px] h-[38px] left-[106px] top-[242px] font-inter font-normal text-[16px] leading-[19px] text-black">
                            Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                        </p>
                    </div>

                    {/* <!-- Working Time Section --> */}
                    <div className="absolute w-[393px] h-[537px] left-[0px] top-[700px] bg-white">
                        <h3 className="absolute w-[166px] h-[36px] left-[106px] top-[306px] font-poppins font-medium text-[24px] leading-[36px] text-black">
                            Working Time
                        </h3>
                        <p className="absolute w-[212px] h-[76px] left-[106px] top-[342px] font-inter font-normal text-[16px] leading-[19px] text-black">
                            Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                        </p>
                    </div>
                </div>

                {/* <!-- Form Section --> */}
                <div className="absolute w-[635px] h-[923px] left-[854px] top-[424px] bg-white">
                    {/* <!-- Name Input --> */}
                    <div className="absolute w-[530px] h-[121px] left-[38px] top-[119px]">
                        <label className="absolute left-0 top-0 font-poppins font-medium text-[16px] leading-[24px] text-black">
                            Your name
                        </label>
                        <input type="text" className="absolute w-full h-[75px] left-0 top-[46px] bg-white border border-[#9F9F9F] rounded-[10px]" />
                    </div>

                    {/* <!-- Email Input --> */}
                    <div className="absolute w-[530px] h-[121px] left-[38px] top-[230px]">
                        <label className="absolute left-0 top-0 font-poppins font-medium text-[16px] leading-[24px] text-black">
                            Email address
                        </label>
                        <input type="email" className="absolute w-full h-[75px] left-0 top-[46px] bg-white border border-[#9F9F9F] rounded-[10px]" />
                    </div>

                    {/* <!-- Subject Input --> */}
                    <div className="absolute w-[528px] h-[121px] left-[38px] top-[390px]">
                        <label className="absolute left-0 top-0 font-poppins font-medium text-[16px] leading-[24px] text-black">
                            Subject
                        </label>
                        <input type="text" className="absolute w-full h-[75px] left-0 top-[46px] bg-white border border-[#9F9F9F] rounded-[10px]" />
                    </div>

                    {/* <!-- Message Input --> */}
                    <div className="absolute w-[528px] h-[166px] left-[38px] top-[511px]">
                        <label className="absolute left-0 top-0 font-poppins font-medium text-[16px] leading-[24px] text-black">
                            Message
                        </label>
                        <textarea className="absolute w-full h-[120px] left-0 top-[46px] bg-white border border-[#9F9F9F] rounded-[10px]"></textarea>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button className="absolute w-[237px] h-[55px] left-[199px] top-[805px] bg-[#029FAE] border border-[#B88E2F] rounded-[5px] text-white font-poppins font-normal text-[16px] leading-[24px]">
                        Submit
                    </button>
                </div>
            </div>
            {/* <!-- Frame 161 --> */}
            <div className="absolute w-[1320px] h-[270px] left-[300px] top-[1347px] flex flex-col justify-between items-center p-[100px_0px] gap-10 bg-[#F4F4F4]">
            </div>

            {/* <!-- Feature --> */}
            <div className="mx-auto flex flex-row justify-between items-center gap-[50px] w-[1188px] h-[70px]">
                {/* <!-- Inside auto layout --> */}
                <div className="flex-none order-0 flex-grow-0"></div>
            </div>

            {/* <!-- Frame 5 --> */}
            <div className="mx-auto flex flex-row items-center gap-[10px] w-[337px] h-[70px]">
                {/* <!-- Inside auto layout --> */}
                <div className="flex-none order-0 flex-grow-0"></div>
            </div>

            {/* <!-- trophy 1 --> */}
            <div className="w-[60px] h-[60px] flex-none order-0 flex-grow-0"></div>

            {/* <!-- Group --> */}
            <div className="absolute left-[6.02%] right-[6.02%] top-[0%] bottom-[0%]"></div>

            {/* <!-- Vector --> */}
            <div className="absolute left-[6.02%] right-[6.02%] top-[0%] bottom-[0%] "></div>

            {/* <!-- Text --> */}
            <div className="flex flex-col items-start gap-2 w-[267px] h-[70px]">
                {/* <!-- High Quality --> */}
                <h1 className="text-[#242424] font-poppins font-semibold text-[25px] leading-[150%] w-[157px] h-[38px]">
                    High Quality
                </h1>
                {/* <!-- crafted from top materials --> */}
                <p className="text-[#898989] font-poppins font-medium text-[20px] leading-[150%] w-[267px] h-[30px]">
                    crafted from top materials
                </p>
            </div>

            {/* <!-- Frame 19 --> */}
            <div className="mx-auto flex flex-row justify-center items-center gap-[10px] w-[328px] h-[70px]">
                {/* <!-- guarantee --> */}
                <div className="w-[60px] h-[60px] flex-none order-0 flex-grow-0"></div>

                {/* <!-- Vector --> */}
                <div className="absolute left-[0%] right-[0%] top-[1.56%] bottom-[1.56%]"></div>

                {/* <!-- Text --> */}
                <div className="flex flex-col items-start gap-2 w-[258px] h-[70px]">
                    <h2 className="text-[#242424] font-poppins font-semibold text-[25px] leading-[150%] w-[258px] h-[38px]">
                        Warranty Protection
                    </h2>
                    <p className="text-[#898989] font-poppins font-medium text-[20px] leading-[150%] w-[126px] h-[30px]">
                        Over 2 years
                    </p>
                </div>
            </div>

            {/* <!-- Frame 4 --> */}
            <div className="mx-auto flex flex-row items-center gap-[10px] w-[259px] h-[70px]">
                {/* <!-- customer-support --> */}
                <div className="w-[60px] h-[60px]"></div>

                {/* <!-- Text --> */}
                <div className="flex flex-col items-start gap-2 w-[189px] h-[70px]">
                    <h2 className="text-[#242424] font-poppins font-semibold text-[25px] leading-[150%] w-[177px] h-[38px]">
                        24 / 7 Support
                    </h2>
                    <p className="text-[#898989] font-poppins font-medium text-[20px] leading-[150%] w-[189px] h-[30px]">
                        Dedicated support
                    </p>
                </div>
            </div>

        </div>
    )
}