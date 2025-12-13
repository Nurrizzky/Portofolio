import { Settings } from "lucide-react";
import lampPoin from '../assets/images/lamp-poin.webp';

export default function HeroSection() {
   return (
      <div className='h-screen font-Onest text-white flex justify-center items-center bg-[#111] relative overflow-hidden'>
        <img src={lampPoin} alt="" className='w-7xl fixed z-10 top-0 right-0' />
        <div className="overflow-hidden pb-5 flex space-x-3 items-center justify-center animate-fade-in">
          <Settings size={40} className='animate-spinner mb-1' />
          <p className='text-4xl font-medium animate-slide-from-right'>Under Development.</p>
        </div>
      </div>
   )
}