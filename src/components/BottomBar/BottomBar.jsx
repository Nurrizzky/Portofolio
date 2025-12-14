import { useState } from "react"
import { UserRound, FolderGit2, BadgeCheck, Send, ArrowBigUpDash } from "lucide-react";

export default function BottomBar({ isVisible }) {

   const menu = [
      { link: "about", name:"About" , icon: <UserRound /> },
      { link: "project", name:"Project", icon: <FolderGit2 /> },
      { link: "certificate", name:"Certificate", icon: <BadgeCheck /> },
      { link: "contact", name:"Contact", icon: <Send /> },
      { link: "hero-section", name:"Landing", icon: <ArrowBigUpDash /> }
   ];
   const [ backgroundStyle, setBackgroundStyle ] = useState({
      left: 0,
      width: 0,
      height: 0,
      opacity: 0
   });

   const handleMouseEnter = (e) => {
      const { offsetLeft, offsetWidth, offsetHeight } = e.target;
      setBackgroundStyle({
         left: offsetLeft,
         width: offsetWidth,
         height: offsetHeight,
         opacity: 1
      })
   }

   const handleMouseLeave = () => {
       setBackgroundStyle(prev => ({...prev, opacity: 0}));
   }


   return (
      <nav className={`w-full font-Onest fixed mx-auto place-items-center z-30 ${ isVisible ? "bottom-5 opacity-100 animate-slide-from-bottom" : "animate-slide-from-top translate-y-36 opacity-0 pointer-events-none" }`}>
         <div className="relative w-fit inset-shadow-sm-cus hover:inset-shadow-md-cus rounded-full ease-in-out transition-all p-1.5 bg-linear-to-b from-dark-light/60 to-dark-light/30 backdrop-blur-sm flex items-center justify-center space-x-2 text-white"
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
            {menu.map((menu, index) => {
               return <a 
               key={index}
               href={`#${menu.link}`} 
               className="py-3 px-3 z-10 group flex items-center"
               onMouseEnter={handleMouseEnter}
               >
                  <p>{menu.icon}</p>
                  <div className="group-hover:visible invisible absolute w-fit px-3 transition-all ease-in-out py-1.5 -top-12 rounded-3xl bg-dark-light inset-shadow-sm-cus" style={{
                     left: `${backgroundStyle.left - 15}px`,
                     opacity: backgroundStyle.opacity
                  }}>{menu.name}</div>
               </a>
            })}
         </div>
      </nav>
   )
}