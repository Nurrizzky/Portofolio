export default function About() {
   return (
      <div id='about' className='h-screen w-full font-Onest text-white bg-[#111]'>
        <div className="w-full absolute top-15 flex justify-between px-10">
          <div className="flex items-center animate-slide-from-left w-fit">
            <div className="absolute flex items-center -space-x-4">
              <div className="rounded-full bg-green-800 w-5 h-5 opacity-70 animate-pulse-size" />
              <div className="rounded-full bg-green-500 w-3 h-3 " />
            </div>
            <p className="text-white ml-7 transition-all mt-0.5 font-medium">Open to Work</p>
          </div>
          <div className="flex items-center">
            <a href="" className="bg-yellow-500 text-gray-800 tracking-tighter text-base font-semibold px-6 py-2 rounded-xl">
              <span className="animate-slide-from-right">M</span><span className="animate-slide-from-bottom">y</span> CV <Download className="inline-block ml-2" size={20} strokeWidth={2.5}  />
            </a>
          </div>
        </div>
      </div>
   )
}