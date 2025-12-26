import { Settings } from "lucide-react";
import SectionWrapper from "../layouts/SectionWrapper";

export default function DevelopmentSession() {
   return (
      <SectionWrapper useSvh={true}>
         <div className="h-full w-full pb-5 flex space-x-3 items-center justify-center animate-fade-in">
          <Settings className='animate-spinner' size={35} />
          <p className='text-4xl max-md:text-2xl max-sm:text-lg font-medium animate-slide-from-right'>Under Development.</p>
        </div>
      </SectionWrapper>
   )
}