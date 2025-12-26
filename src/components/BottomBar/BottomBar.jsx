import { useState, useEffect } from "react"
import { UserRound, FolderGit2, BadgeCheck, Send, ArrowBigUpDash, SunMedium, Moon, BriefcaseBusiness } from "lucide-react";

export default function BottomBar({ isVisible }) {
   const [activeMenu, setActiveMenu] = useState("");
   const [theme, setTheme] = useState('dark');

   useEffect(() => {
      if (theme === 'light') {
         document.documentElement.classList.add('light');
      } else {
         document.documentElement.classList.remove('light');
      }
   }, [theme]);

   const toggleTheme = () => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
   };

   const menu = [
      { link: "about", name:"About" , icon: <UserRound /> },
      { link: "experience", name:"Experience", icon: <BriefcaseBusiness /> },
      { link: "project", name:"Project", icon: <FolderGit2 /> },
      { link: "certificate", name:"Certificate", icon: <BadgeCheck /> },
      { link: "contact", name:"Contact", icon: <Send /> },
      // { link: "contact", name:"Contact", icon: <ContactLink /> },
      // { link: "hero-section", name:"Landing", icon: <ArrowBigUpDash /> },
      { link: "theme", name:"Theme", icon:  theme === 'dark' ? <SunMedium /> : <Moon /> }
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
      <nav className={`w-full fixed mx-auto place-items-center z-50 bottom-5 transition-all  ${ isVisible ? "visible animate-slide-from-bottom" : "animate-slide-from-top invisible opacity-0 pointer-events-none" }`}>
         <div className="relative w-fit inset-shadow-sm-cus hover:inset-shadow-md-cus rounded-full ease-in-out duration-200 transition-all p-1.5 bg-linear-to-b from-dark-light/80 to-dark-light/20 light:from-white/60 light:to-white/20 backdrop-blur-md  flex items-center justify-center text-white"
            onMouseLeave={handleMouseLeave}
         >

            {/* Backgrond Icon */}
            <div className="inset-shadow-sm-cus bg-[#b9b9b92c] light:bg-dark-light rounded-full transition-all duration-200 absolute"
               style={{
                  left: `${backgroundStyle.left}px`,
                  width: `${backgroundStyle.width}px`,
                  height: `${backgroundStyle.height}px`,
                  opacity: backgroundStyle.opacity
               }}
            />

            {/* Tooltip Icon */}
            <div 
               className="absolute -top-12 px-3 py-1.5 rounded-3xl max-sm:hidden bg-dark-light inset-shadow-sm-cus duration-200 transition-all text-sm pointer-events-none whitespace-nowrap"
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
               return ((menu.name !== 'Theme') ?   
               <a 
                  key={index}
                  href={`#${menu.link}`} 
                  className="py-3 px-3 z-10 group flex items-center light:text-dark-light light:hover:text-white transition-all"
                  onMouseEnter={(e) => handleMouseEnter(e, menu.name)}
                  >
                  <p>{menu.icon}</p>
               </a> : <button key={index} className={`p-3 z-10 group light:text-dark-light light:hover:text-white inline-block transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`} onClick={toggleTheme} onMouseEnter={(e) => handleMouseEnter(e, menu.name)}>
                  {menu.icon}
               </button>)
            })}
         </div>
      </nav>
   )
}