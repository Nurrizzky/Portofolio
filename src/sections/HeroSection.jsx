import { ChevronDown, FileUser } from "lucide-react";
import Boxtext from "../components/BoxText/BoxText";
import Sparkling from '../assets/images/sparkling.webp'
import SectionWrapper from '../layouts/SectionWrapper';
import { ReactTyped } from "react-typed";

export default function HeroSection() {
   return (
      <SectionWrapper id={"hero-section"} style={"relative flex justify-center items-center"} useSvh={true}>

        <div className="w-full absolute top-10 flex justify-between px-50 max-sm:px-7 max-sm:top-7">
          <div className="flex items-center animate-slide-from-left w-fit">
            <div className="absolute flex items-center">
              <div className="rounded-full absolute -left-1 bg-green-800 w-5 h-5 animate-pulse-size" />
              <div className="rounded-full absolute -left-1 bg-green-800 w-5 h-5 animate-pulse-sizeX" />
              <div className="rounded-full bg-green-500 w-3 h-3 z-10" />
            </div>
            <p className="text-white ml-7 transition-all mt-0.5 font-medium">Open to Work</p>
          </div>
          <div className="flex items-center group">
            <a href="" className=" bg-yellow-500 text-gray-800 tracking-tighter text-base font-semibold px-6 py-2 rounded-xl">
              <FileUser className="inline-block group-hover:visible invisible group- group-hover:animate-slide-from-right transition-all ease-in-out" size={20}/> <span className="animate-slide-from-right">M</span><span className="animate-slide-from-bottom">y</span> CV
            </a>
          </div>
        </div>


        <div className="font-semibold tracking-tight flex -space-y-1 flex-col">
            <h3 className="text-2xl animate-slide-from-left">Hello There <span className="animate-hand-swing inline-block">👋</span> </h3> 
            <div className="text-7xl flex space-x-1 relative max-sm:text-2xl max-sm:flex-col max-sm:space-y-3">
              <h1 className="bg-linear-to-r from-white to-[#ffe5e5] bg-clip-text text-transparent animate-slide-from-right">Let me introduce </h1> 
              <Boxtext>
               my self
              </Boxtext>
              <img src={Sparkling} alt="Sparkling" className="w-12 absolute -top-12.5 -right-6.5 max-sm:w-7 max-sm:top-5 max-sm:right-19" />
            </div>
        </div>


        <div className="w-full absolute bottom-15 flex justify-between items-center px-50 max-md:text-sm max-sm:px-5">
          <div className="flex items-center space-x-2 absolute">
            <p className="text-white animate-slide-from-bottom">Nur Rizky © 2025</p>
          </div>
          <a href="#about" className="w-full relative mx-auto">
          <ChevronDown size={40} color="white" className="animate-up-down w-fit absolute mx-auto left-0 right-0 bottom-0" />
          </a>
        </div>
      </SectionWrapper>
   )
}