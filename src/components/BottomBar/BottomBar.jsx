import { useState } from "react"
import { UserRound, FolderGit2, BadgeCheck, Send, ArrowBigUpDash, SunMedium } from "lucide-react";

export default function BottomBar({ isVisible }) {
   const [activeMenu, setActiveMenu] = useState(""); //menyimpan nama menu yang aktif

   const menu = [
      { link: "about", name:"About" , icon: <UserRound /> },
      { link: "project", name:"Project", icon: <FolderGit2 /> },
      { link: "certificate", name:"Certificate", icon: <BadgeCheck /> },
      { link: "contact", name:"Contact", icon: <Send /> },
      { link: "hero-section", name:"Landing", icon: <ArrowBigUpDash /> },
      { link: "#", name:"Theme", icon:  activeMenu ? <SunMedium /> : <ArrowBigUpDash /> }
   ];
   const [ backgroundStyle, setBackgroundStyle ] = useState({
      left: 0,
      width: 0,
      height: 0,
      opacity: 0
   });

   const handleMouseEnter = (e, name) => {
      const { offsetLeft, offsetWidth, offsetHeight } = e.currentTarget;
      setBackgroundStyle({
         left: offsetLeft,
         width: offsetWidth,
         height: offsetHeight,
         opacity: 1
      })
      setActiveMenu(name);
   }

   const handleMouseLeave = () => {
       setBackgroundStyle(prev => ({...prev, opacity: 0}));
   }


   return (
      <nav className={`w-full font-Onest fixed mx-auto place-items-center z-30 ${ isVisible ? "bottom-5 opacity-100 animate-slide-from-bottom" : "animate-slide-from-top translate-y-20 opacity-0 pointer-events-none" }`}>
         <div className="relative w-fit inset-shadow-sm-cus hover:inset-shadow-md-cus rounded-full ease-in-out transition-all p-1.5 bg-linear-to-b from-dark-light/60 to-dark-light/20 backdrop-blur-lg backdrop-brightness-100 flex items-center justify-center space-x-2 text-white"
            onMouseLeave={handleMouseLeave}
         >
            <div className="inset-shadow-sm-cus bg-[#b9b9b92c] backdrop-blur-sm rounded-full transition-all absolute"
               style={{
                  left: `${backgroundStyle.left}px`,
                  width: `${backgroundStyle.width}px`,
                  height: `${backgroundStyle.height}px`,
                  opacity: backgroundStyle.opacity
               }}
            />

            <div 
               className="absolute -top-12 px-3 py-1.5 rounded-3xl bg-dark-light inset-shadow-sm-cus text-sm transition-all duration-300 pointer-events-none whitespace-nowrap"
               style={{
                  left: `${backgroundStyle.left + (backgroundStyle.width / 2)}px`,
                  transform: "translateX(-50%)", 
                  opacity: backgroundStyle.opacity,
                  visibility: backgroundStyle.opacity 
               }}
            >
               {activeMenu}
            </div>

            {menu.map((menu, index) => {
               return <a 
                  key={index}
                  href={`#${menu.link}`} 
                  className="py-3 px-3 z-10 group flex items-center"
                  onMouseEnter={(e) => handleMouseEnter(e, menu.name)}
                  >
                  <p>{menu.icon}</p>
               </a>
            })}
         </div>
      </nav>
   )
}