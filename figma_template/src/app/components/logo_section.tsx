import Image from "next/image";
import Logo1 from "../../public/logos/Logo (2).png";
import Logo2 from "../../public/logos/Logo (3).png";
import Logo3 from "../../public/logos/Logo (4).png";
import Logo4 from "../../public/logos/Logo (5).png";
import Logo5 from "../../public/logos/Logo (6).png";
import Logo6 from "../../public/logos/Logo (7).png";
import Logo7 from "../../public/logos/Logo (8).png";

export default function LogoSection(){
    return(
        // Logos
        <div className="max-w-[1321px] w-full h-[139px] flex justify-between items-center">
  
          {/* Logos Section */}
          <section className="flex flex-wrap items-center justify-between gap-6 mb-10 mt-8">
           
              <Image src={Logo1.src} alt="Zapier" className="w-[85px] h-[87px] "/>
           
              <Image className="w-[107px] h-[109px]" src={Logo2.src} alt="PipeDrive" />
          
              <Image className="w-full h-full" src={Logo3.src} alt="CIB Bank" />
            
              <Image className="w-[135px] h-[139px] " src={Logo4.src} alt="Logo" />
            
              <Image className="w-[98px] h-[101px] " src={Logo5.src} alt="Burnt Toast" />
            
              <Image className="w-[113px] h-[115px] " src={Logo6.src} alt="Panda Doc" />
            
              <Image className="w-[84px] h-[87px]" src={Logo7.src} alt="Moz" />
            
          </section>
          </div>
        
    )
}