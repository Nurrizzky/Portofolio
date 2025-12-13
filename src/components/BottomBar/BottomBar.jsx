import { House, Sparkle } from "lucide-react";

export default function BottomBar({ isVisible }) {
   return (
    
   <div className={`w-full font-Onest fixed bottom-0 mx-auto place-items-center z-30 transition-all duration-500 ease-in-out ${ isVisible ? "bottom-10 opacity-100 translate-y-0" : "-bottom-20 opacity-0 translate-y-10 pointer-events-none" }`}>
      <div className="w-1/3 border-t border-white/35 border-b border-b-white/10 rounded-2xl px-5 py-2.5 bg-linear-to-b from-gray-600/40 to-gray-600/25 backdrop-blur-md flex text-white">
         <a href="#about" className="border-white/35 border-b border-r border-l  border-t border-b-white/10 rounded-lg py-2 px-3">
            <p>About</p>
         </a>
      </div>
    </div>
   )
}