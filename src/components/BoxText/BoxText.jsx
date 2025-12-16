export default function Boxtext({children, style}) {
   return (
      <div className={`${style} px-3 animate-slide-from-right h-fit bg-linear-to-br from-30% from-[#ff0202] to-[#540000] rounded-[10px] inset-shadow-lg-cus flex justify-center items-center`}>
         {children}
      </div>
   )
}