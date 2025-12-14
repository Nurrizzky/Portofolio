import { ChevronDown, FileUser } from "lucide-react";
import Boxtext from "../components/BoxText/BoxText";
import Sparkling from '../assets/images/sparkling.webp'
import SectionWrapper from '../layouts/SectionWrapper';

export default function HeroSection() {
   return (
      <SectionWrapper id={"hero-section"} style={"relative flex justify-center items-center"} useSvh={true}>

        <div className="w-full absolute top-10 flex justify-between px-10">
          <div className="flex items-center animate-slide-from-left w-fit">
            <div className="absolute flex items-center -space-x-4">
              <div className="rounded-full bg-green-800 w-5 h-5  animate-pulse-size" />
              <div className="rounded-full bg-green-500 w-3 h-3 z-10" />
            </div>
            <p className="text-white ml-7 transition-all mt-0.5 font-medium">Open to Work</p>
          </div>
          <div className="flex items-center">
            <a href="" className="bg-yellow-500 text-gray-800 tracking-tighter text-base font-semibold px-6 py-2 rounded-xl">
              <FileUser className="inline-block" size={20}/> <span className="animate-slide-from-right">M</span><span className="animate-slide-from-bottom">y</span> CV
            </a>
          </div>
        </div>


        <div className="font-medium flex -space-y-1 flex-col">
            <h3 className="text-lg">Hello There <span className="animate-hand-swing inline-block">👋</span> </h3> 
            <div className="text-4xl flex space-x-1 relative max-sm:text-2xl max-sm:flex-col max-sm:space-y-3">
              <h1 className="bg-linear-to-r from-white to-[#bc0000] bg-clip-text text-transparent ">Let me introduce</h1> 
              <Boxtext>my self</Boxtext>
              <img src={Sparkling} alt="" className="w-12 absolute -top-12.5 -right-6.5 max-sm:w-7 max-sm:top-5 max-sm:right-19" />
            </div>
        </div>


        <div className="w-full absolute bottom-15 flex justify-between items-center px-15 max-md:text-sm max-md:px-5">
          <div className="flex items-center space-x-2">
            <p className="text-white">Nur Rizky © 2025</p>
          </div>
          <a href="#about" className="">
          <ChevronDown size={40} color="white" className="animate-up-down" />
          </a>
          <div className="flex items-center">
            <p className="text-white">
              Front-end
            </p>
          </div>

        </div>
      </SectionWrapper>
   )
}