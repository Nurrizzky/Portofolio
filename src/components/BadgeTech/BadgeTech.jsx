export default function BadgeTech({ techIcon, iconDescription, iconSize, iconName }) {
   return (
      <div className="px-4.5 py-2 bg-dark-light w-fit rounded-2xl text-xl whitespace-nowrap inset-shadow-sm-cus hover:inset-shadow-lg-cus transition-all ease-in-out flex space-x-3 justify-center items-center">
         <img src={techIcon} alt={iconDescription} className={iconSize} loading="lazy" />
         <p className="text-base tracking-wide">{iconName}</p>
      </div>
   )
}