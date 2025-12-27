import { ChevronDown, FileUser } from "lucide-react";
import Sparkling from '../assets/images/sparkling.webp';
import SectionWrapper from '../layouts/SectionWrapper';
import gradient from "../assets/images/gradient.webp"
import TextMaskAnimation from "../components/TextMaskAnimation/TextMaskAnimation";
import textSpacer from "../utils/textSpacer";

export default function HeroSection() {

  const welcomeText = textSpacer("Hello there");
  const passion = textSpacer("Frontend");

   return (
      <SectionWrapper id={"hero-section"} style={"sticky top-0 flex justify-center -z-10 items-center"} heroSection={true} useSvh={true}>

        <div className="absolute inset-0 w-full h-full -z-10">
            <img src={gradient} alt="Gradient bg" className="w-full h-full light:bg-white bg-bg-dark"/>
        </div>

        <div className="font-medium flex flex-col space-y-3 items-center relative">
            <div className="flex flex-col justify-center items-center relative max-sm:flex-col max-sm:space-y-3">
              {/* <p className="text-white animate-slide-from-bottom text-sm  tracking-wider bg-linear-to-b from-black to-100% to-blue-400/20 backdrop-blur-lg px-4 py-1 mb-5 rounded-2xl">
                Nur Rizky © 2025
              </p> */}
              <div className="animate-slide-from-right relative">
                <TextMaskAnimation text={welcomeText} bySingleCharacter={true} style={"text-8xl max-sm:text-6xl light:text-bg-dark"} trackingText="tracking-tighter" useBlur={true} />
                <img src={Sparkling} alt="Sparkling" loading="eager" className="w-12 max-sm:w-9 max-sm:-top-4 max-sm:-right-5  absolute -top-6 -right-6.5 animate-pulse-sparkling-three" />
                <img src={Sparkling} alt="Sparkling" loading="eager" className="w-6  max-sm:w-4 max-sm:-top-4.5 max-sm:-right-4.5 absolute -top-7 -right-6.5 animate-pulse-sparkling-two" />
                <img src={Sparkling} alt="Sparkling" loading="eager" className="w-8  max-sm:w-5 max-sm:top-2 max-sm:-right-6.5 absolute top-1.5 -right-10 animate-pulse-sparkling" />
              </div> 
              <h3 className="animate-slide-from-right tracking-wide max-sm:text-base text-lg flex flex-col items-center text-gray-400">
                Let me introduce my self as a 
                <TextMaskAnimation bySingleCharacter={true} style={"font-OldStandarTT font-normal italic text-xl text-white light:text-bg-dark"} text={passion} trackingText="tracking-wider" />
              </h3> 
            </div>
        </div>

        <div className="w-full absolute bottom-15 flex justify-between items-center max-md:text-sm max-sm:px-5 z-30">
          <a href="#about" className="w-full relative mx-auto z-30">
            <ChevronDown size={40} color="white" className="animate-up-down w-fit absolute mx-auto left-0 right-0 bottom-0" />
          </a>
        </div>
      </SectionWrapper>
   )
}