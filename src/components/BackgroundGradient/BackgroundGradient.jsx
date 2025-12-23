export default function BackgroundGradient() {
   return (
      <>
         <div className="
             fixed w-full h-full box-border transition-colors duration-700 ease-linear z-30
         ">
            <div className="h-20 w-full absolute bottom-0 bg-linear-to-b from-black/0 to-black/50 backdrop-blur-xl"></div>
         </div>
      </>
   )
}