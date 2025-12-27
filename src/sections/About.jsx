import SectionWrapper from "../layouts/SectionWrapper";
import profile from "../assets/images/profile.jpeg";
import BadgeTechWrapper from "../layouts/BadgeTechWrapper";
import TextMaskAnimation from '../components/TextMaskAnimation/TextMaskAnimation';
import textSpacer from '../utils/textSpacer';
import React, { useEffect, useState, useCallback, memo } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import { ArrowDown } from "lucide-react";

const name = textSpacer("Muhammad Nur Rizky");
const titleSection = textSpacer("About me.");
const division = textSpacer("Frontend");
const country = textSpacer("Indonesia");
const address = textSpacer("Bogor, Jawa Barat");
const text = [
   "Saya adalah siswa SMK Wikrama Bogor jurusan PPLG (Pengembangan Perangkat Lunak dan Gim). Saya memiliki fokus dan ketertarikan dibidang",
   "web development ter-khususnya sebagai Frontend Developer. Memiliki pengalaman dalam mengembangkan berbagai proyek web seperti sistem CRUD dan website manajemen data.",
   "Memiliki semangat belajar tinggi dan terbiasa bekerja mandiri maupun berkolaborasi."
];

const About = () => {

   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   // menggunakan useCallback mencegah pembuatan function baru / re-render element
   const handleRenderBlock = useCallback((block, activity) => {
      return React.cloneElement(block, {
         'data-tooltip-id': 'github-tooltip',
         'data-tooltip-content': `${activity.count} activities on ${activity.date}`,
         style: { 
            fill: activity.count === 0 ? '#111' : undefined,
            outline: 'none' 
         },
         rx: 2, 
         ry: 2,
      })
   }, [])

   return (
      <SectionWrapper id={"about"} style={'z-50'} useSvh={true}>
         {/* <h1 className="text-3xl mb-10 font-semibold">About me.</h1> */}
         <TextMaskAnimation text={titleSection} bySingleCharacter={true} style={'text-3xl mb-8 font-semibold'} />
         <div className="h-fit flex flex-col px-4">

               <div className="h-fit w-full flex justify-between">
                  <div className="flex space-x-2 items-center">
                     <div className="inset-shadow-md-cus p-1 rounded-2xl">
                        <img src={profile} alt="profile-picture" className="w-13 hover:w-20 rounded-xl transition-all ease-in-out duration-300" />
                     </div>
                     <div className="flex flex-col -space-y-1">
                        <TextMaskAnimation text={name} bySingleCharacter={true} style={'text-white light:text-bg-dark text-lg font-medium'} />
                        <TextMaskAnimation text={division} style={'text-white/80 text-base light:text-bg-dark/50'} bySingleCharacter={true} />
                     </div>
                  </div>
                  <div className="flex space-x-2 items-center text-right group">
                     <div className="flex flex-col -space-y-1">
                        <TextMaskAnimation text={country} bySingleCharacter={true} style={'text-white light:text-bg-dark text-lg font-medium'} />
                        <TextMaskAnimation text={address} bySingleCharacter={true} style={'text-white/80 light:text-bg-dark/50 text-base'} />
                     </div>
                  </div>
               </div>

               <div className="text-left flex flex-col max-sm:text-left w-full h-fit overflow-hidden mt-8">
                  <TextMaskAnimation text={text} singleCharacter={false} trackingText='tracking-wide' style={"light:text-bg-dark"} />
                  {/* <a href="#contact" className="group overflow-hidden w-fit py-1 pl-3.5 pr-1 inset-shadow-md-cus rounded-full bg-white text-bg-dark my-5 flex space-x-3 items-center justify-center transition-all duration-200 ease-in-out">
                     <p>Let's talk</p>
                     <ArrowDown className="group-hover:opacity-100 group-hover:w-auto opacity-0 w-0 bg-bg-dark rounded-full text-white p-[1.5px] transition-all duration-500 ease-in-out" />
                  </a> */}
                  <div className="flex flex-col mt-8">
                     <h2 className="text-xl font-medium text-left mb-5">Technologies I have used</h2>
                     <div className="flex flex-col">
                        <BadgeTechWrapper scrollDirection={"animate-scrollXtoLeft"} paddingT={true} paddingB={true} />
                        <BadgeTechWrapper scrollDirection={"animate-scrollXtoRight"} paddingB={true} /> 
                     </div>
                  </div>
                  <div className="w-full h-full flex flex-col items-start justify-start mt-8">
                     <h2 className="text-xl font-medium text-left mb-5">Github Contribution</h2>
                     <div className="w-full flex items-end space-x-3 max-xl:flex-col  max-md:items-center max-md:justify-center">
                        <div className="w-full bg-dark-light flex justify-center rounded-md items-center mx-2 p-5 inset-shadow-sm-cus">
                           {!isMounted ? (
                              <div className="animate-pulse flex gap-2">
                                 <div className="h-32 w-full bg-slate-700/50 rounded-md"></div>
                                 <span className="text-slate-400 text-sm">Loading GitHub Data...</span>
                              </div>
                           ) : (
                              <GitHubCalendar 
                                 username="Nurrizzky"
                                 colorScheme="dark"
                                 blockSize={10}
                                 blockMargin={3}
                                 fontSize={13}
                                 renderBlock={handleRenderBlock}
                              />
                           )}
                           <Tooltip id="github-tooltip" className=' text-white px-3 py-2 inset-shadow-md-cus' style={{ backgroundColor:"#111", borderRadius: '16px', fontSize: '14px' }} />
                        </div>
                        <div className="flex h-full space-x-3 w-full max-xl:flex-col max-xl:space-y-3">
                           <div className="flex flex-col gap-2 w-full h-full">
                              <h1>Currently Learning</h1>
                              <div className="w-full h-full bg-dark-light p-5 flex items-center justify-center rounded-md inset-shadow-sm-cus">
                                 <ul className='list-disc list-inside'>
                                    <li>Flutter</li>
                                    <li>React</li>
                                    <li>Framer Motion</li>
                                    <li>Optimizion website</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="flex flex-col gap-2 w-full">
                              <h1>Experience</h1>
                              <div className="w-full h-full bg-dark-light p-3 flex flex-col items-center justify-center rounded-md inset-shadow-sm-cus">
                                 <p className='text-center text-2xl font-bold tracking-wider'>6 month</p>
                                 <p className='text-center text-base'>as Frontend</p>
                              </div>
                           </div>
                           <div className="flex flex-col gap-2 w-full">
                              <h1>Certification</h1>
                              <div className="w-full h-full bg-dark-light p-3 flex items-center justify-center rounded-md inset-shadow-sm-cus">
                              <p className='text-center text-2xl font-bold tracking-wider'>5+</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-full flex flex-col items-start justify-start mt-8">
                        <h2 className="text-xl font-medium text-left mb-5">Interests</h2>
                        {/* <TextMaskAnimation text={textSpacer("Interest")} bySingleCharacter={true} style={'text-xl font-medium text-left mb-5'} />  */}
                        <p>Professional: Learning Something New, Coding</p>
                        <p>Hobbies: Swimming, BasketBall, Listening To Music, Playing Strategic Games, and watch Movie</p>
                     </div>
                  </div>
               </div>
         </div>
      </SectionWrapper>
   )
}

export default memo(About);
// ini memastikan agar tidak terjadi render ulang jika isi contentnya sama.

/*
   Alasan utama menggunakan useMemo pada page About karena pada saat BottomBar di render dan terjadi perubahan state di main.jsx halaman about ini
   ikut ke re-render yang membuat efek patah patah karena github-calendar sedang get data dari Github untuk menampilakan Data kontribusi dari github.
*/