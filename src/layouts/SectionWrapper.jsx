export default function SectionWrapper({ children, id, style, useSvh = false, heroSection = false }) {
   const isHeroSection = heroSection ? "w-full flex justify-center items-center" : "w-[90%] md:w-[80%] z-50";
   const height = useSvh ? "min-h-svh md:h-screen" : "lg:h-screen";
   return (
      <section id={id} className={`${height} w-full  dark:bg-[#111] light:bg-white flex justify-center items-center transition-colors duration-300 py-10 overflow-hidden ${style} max-sm:px-5`}>
         <div className={`${isHeroSection} h-full `}>
            {children}
         </div>
      </section>
   )
}