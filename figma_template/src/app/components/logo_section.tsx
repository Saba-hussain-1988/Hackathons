import Image from "next/image";
import Logo1 from "../../../public/logos/Logo (2).png";
import Logo2 from "../../../public/logos/Logo (3).png";
import Logo3 from "../../../public/logos/Logo (4).png";
import Logo4 from "../../../public/logos/Logo (5).png";
import Logo5 from "../../../public/logos/Logo (6).png";
import Logo6 from "../../../public/logos/Logo (7).png";
import Logo7 from "../../../public/logos/Logo (8).png";


export default function LogoSection() {
    return (
        // Logos
        <div className="absolute w-[1321px] h-[139px] flex justify-between items-center top-[1100px]">

            {/* Logos Section */}


            <Image src={Logo1}
                alt="Zapier" className="w-[85px] h-[87px] " />

            <Image src={Logo2}
                alt="PipeDrive" className="w-[107px] h-[109px]" />

            <Image src={Logo3}
                alt="CIB Bank" className="w-[135px] h-[139px]" />

            <Image src={Logo4}
                alt="Logo" className="w-[63px] h-[65px] " />

            <Image src={Logo5}
                alt="Burnt Toast" className="w-[98px] h-[101px] " />

            <Image src={Logo6}
                alt="Panda Doc" className="w-[113px] h-[115px] " />

            <Image src={Logo7}
                alt="Moz" className="w-[84px] h-[87px]" />

        </div>


    )
}