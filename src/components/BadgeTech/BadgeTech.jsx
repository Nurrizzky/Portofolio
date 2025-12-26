export default function BadgeTech({ techIcon, iconDescription, iconSize, iconName }) {
   return (
      <div className="group px-3 py-1.5 bg-bg-dark hover:bg-black w-fit rounded-2xl text-xl whitespace-nowrap inset-shadow-sm-cus hover:inset-shadow-lg-cus transition-all duration-200 ease-in-out flex space-x-3 justify-center items-center">
         <img src={techIcon} alt={iconDescription} className={`${iconSize}  duration-200 transition-all ease-out `} loading="lazy" />
         <p className="text-base tracking-wide">{iconName}</p>
      </div>
   )
}