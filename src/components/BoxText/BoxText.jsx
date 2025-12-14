export default function Boxtext({children}) {
   return (
      <div className="w-fit px-3 h-12 bg-linear-to-br from-[#ff0202] via-[#9b0000] to-[#540000] rounded-[10px] inset-shadow-sm flex justify-center items-center">
         {children}
      </div>
   )
}