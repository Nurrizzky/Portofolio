import { useState } from "react";
import SectionWrapper from "../layouts/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {

   const [isClick, setIsClick] = useState(false);

   const hasBeenClick = () => {
      if (isClick) {
         setIsClick(false);
         return;
      }
      setIsClick(true);
   }

   return (
      <SectionWrapper id={"experience"} style={"dark:bg-slate-900"}>
         <div className="flex flex-col h-full w-full items-start">

            <h1 className="text-3xl mb-10 font-semibold">My Education.</h1>
            <div className="w-full h-fit flex space-x-20 justify-between items-start max-xl:flex-col">
               <div className="flex flex-col w-fit text-nowrap">
                  <div className="flex flex-col space-y-1">
                     <p className="font-semibold text-xl">SMK Wikrama Bogor</p>
                     <p className="text-white/70">Pengembangan Perangkat Lunak & Gim(PPLG)</p>
                     <p className="text-white/70">July 2023 - June 2026</p>
                  </div>
               </div>
               <div className="flex flex-col max-xl:mt-5">
                  <p className="">Disinilah saya memulai journey saya sebagai Programmer Pertama kali mengenal Apa itu Coding, Programming, dan bagaimana aplikasi itu dibuat. adapun hal hal yang sudah saya pelajari, sebagai berikut.</p>
                  <ul className='list-disc list-inside mt-2'>
                     <li>Mempelajari konsep membangun sebuah program dalam membangun sebuah Website ataupun Mobile Application.</li>
                     <li>Mempelajari manejemen kode menggunakan Git & Github.</li>
                     <li>Mendalami keahlian dalam penggunaan Framework Laravel untuk pengembangan Website.</li>
                     <li>Berpengalaman dalam tim untuk membangun sebuah proyek kolaboratif bersama rekan teman.</li>
                     <li>Mempelajari dasar database, REST API, dan integrasi frontend-backend.</li>
                  </ul>
               </div>
            </div>

            <h1 className="text-3xl my-10 font-semibold">My Experience.</h1>
            <div className="w-full h-full flex flex-col justify-between relative">
               <div onClick={hasBeenClick} className={`w-full h-fit flex flex-col border-t-[0.5px] border-b-[0.5px] border-white/80 p-5 overflow-hidden cursor-pointer transition-all duration-300 ease-in-out`}>
                     <div className="flex justify-between w-full">   
                        <div className="flex flex-col">
                           <h2 className="text-lg">Internship</h2>
                           <p className="text-base text-white/70">PT. Shibly Teknologi Solusi(STS)</p>  
                        </div>
                        <div className="flex flex-col text-right">
                           <h2 className="text-lg">Frontend Developer</h2>
                           <p className="text-base text-white/70">Jakarta Timur</p>  
                        </div>
                     </div>
                     <AnimatePresence>
                        {isClick && (
                           <motion.div 
                              initial={{ height:0, opacity:0 }}
                              animate={{ height:"auto", opacity:1 }}
                              exit={{ height:0, opacity:0 }}
                              transition={{ duration: 0.45, ease: "circInOut" }}
                              className="overflow-hidden"
                           >
                              <p className="text-base text-white mt-5">Januari 2024 - Juni 2024 (6 month) </p>  
                              <ul className='list-disc list-inside mt-2'>
                                 <li>Melakukan integrasi API untuk operasi CRUD dan menyusun logika pemrosesan data di sisi client agar sesuai dengan format backend.</li>
                                 <li>Berhasil Membangun sistem keamanan routing menggunakan Middleware berbasis role (hak akses) pengguna.</li>
                                 <li>Berhasil melakukan perbaikan bug dan pengujian fungsional untuk memastikan aplikasi berjalan  sesuai dengan keinginan.</li>
                              </ul>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
            </div>
         </div>
      </SectionWrapper>
   )
}