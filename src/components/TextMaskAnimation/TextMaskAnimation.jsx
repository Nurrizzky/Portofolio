// eslint-disable-next-line no-unused-vars
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function TextMaskAnimation({ 
   text, 
   style, 
   useBlur = false,
   bySingleCharacter = false,
   trackingText = ""
}) {

   const isUseBlur = useBlur ? "blur(10px)" : "blur(0px)";
   const isSingleCharacterDuration = bySingleCharacter ? 0.07 : 0.3; 
   const isBySingleCharacter = bySingleCharacter ? "flex" : "";
   
   const body = useRef(null);
      const isInView = useInView(
         body,
         {
            once: true,
            margin: "-10%"
         }
      )
      const animation = {
         initial: {
            y: "100%",
            opacity: 0,
            filter: isUseBlur
         },
         enter: i => ({ 
            y: "0",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
               duration: 0.80,
               ease: [0.33, 1, 0.68, 1],
               delay: isSingleCharacterDuration * i
            }
         })
      }

   return (
      <div ref={body} className={`${isBySingleCharacter} ${trackingText} text-gray-200`}>
         {
            Array.isArray(text) ? 
               text.map((data, index) => {
                  return <div key={index} className="overflow-hidden m-0">
                     <motion.p custom={index} variants={animation} initial="initial" animate={isInView ? "enter" : ""} className={style}>
                        {data}
                     </motion.p>
                  </div>
               })

            :

            <div className="overflow-hidden m-0">
               <motion.p custom={0} variants={animation} initial="initial" animate={isInView ? "enter" : ""} className={style}>
                  {text}
               </motion.p>
            </div>
         }
      </div>
   )
}