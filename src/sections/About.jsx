import React from 'react';
import SectionWrapper from "../layouts/SectionWrapper";
import profile from "../assets/images/profile.jpeg";
import BadgeTechWrapper from "../layouts/BadgeTechWrapper";
import  { GitHubCalendar }  from "react-github-calendar"; 
import { Tooltip } from "react-tooltip";
import TextMaskAnimation from '../components/TextMaskAnimation/TextMaskAnimation';
import textSpacer from '../utils/textSpacer';
import { FileUser } from 'lucide-react';


const text = [
   "Saya adalah siswa di SMK Wikrama Bogor jurusan Pengembangan dan Perangkan Lunak dan Gim (PPLG) dengan spesialisasi pengembangan Front-End.",
   "Memiliki keahlian teknis dalam membangun aplikasi web responsif menggunakan React.js dan Tailwind CSS serta pengembangan mobile dengan Flutter. Terbiasa bekerja dengan",
   "Linux environment dan memiliki semangat tinggi untuk menciptakan antarmuka pengguna yang modern dan fungsional"
];

const name = textSpacer("Muhammad Nur Rizky");

export default function About() {

   return (
      <SectionWrapper id={"about"} useSvh={true}>
         <h1 className="text-3xl mb-10">About me.</h1>
         <div className="mt-5 h-full flex flex-col space-x-10 max-sm:flex-col max-sm:items-center">

               <div className="h-fit w-full flex justify-between">
                  <div className="flex space-x-2 items-center">
                     <div className="inset-shadow-md-cus p-1 rounded-2xl">
                        <img src={profile} alt="profile-picture" className="w-[50px] hover:w-20 rounded-xl transition-all ease-in-out duration-300" />
                     </div>
                     <div className="flex flex-col -space-y-1">
                        <TextMaskAnimation text={name} bySingleCharacter={true} singleCharacterDuration={true} style={'text-white text-lg font-medium'} />
                        <TextMaskAnimation text={"Frontend"} style={'text-white/80 text-base'} />
                     </div>
                  </div>
                  <div className="flex space-x-2 items-center text-right group">
                     <div className="flex flex-col -space-y-1">
                        <TextMaskAnimation text={"Indonesia"} style={'text-white text-lg font-medium'} />
                        <TextMaskAnimation text={"Bogor, Jawa Barat"} style={'text-white/80 text-base'} />
                     </div>
                  </div>
               </div>

               <div className="text-left flex flex-col max-sm:text-left w-full overflow-hidden mt-10">
                  <p>
                     Hai, saya Rizky
                     <span className='animate-hand-swing inline-block ml-1 text-lg'>👋</span>
                  </p>
                  <TextMaskAnimation text={text} singleCharacter={false} trackingText='tracking-wide' />
                  <p className='italic'>
                     "Trying to be better"
                  </p>
                  <div className="flex flex-col mt-5">
                     <h2 className="text-xl font-medium text-left mb-5">Technologies I have used</h2>
                     <div className="flex flex-col">
                        <BadgeTechWrapper scrollDirection={"animate-scrollXtoLeft"} paddingT={true} paddingB={true} />
                        <BadgeTechWrapper scrollDirection={"animate-scrollXtoRight"} paddingB={true} /> 
                     </div>
                  </div>
                  <div className="w-full flex flex-col items-start justify-start mt-10">
                     <h2 className="text-xl font-medium text-left mb-5">Github Contribution</h2>
                     <div className="flex space-x-3 w-full max-md:flex-col">
                        <div className="w-fit p-5 rounded-xl inset-shadow-sm-cus bg-dark-light">
                           <GitHubCalendar 
                              username="Nurrizzky"
                              colorScheme="dark"
                              tooltips={true}
                              blockSize={10}
                              blockMargin={3}
                              showTotalCount={true}
                              showWeekdayLabels={true}
                              weekStart={1}
                              renderBlock={(block, activity) => 
                                 React.cloneElement(block, {
                                    'data-tooltip-id': 'github-tooltip',
                                    'data-tooltip-content': `${activity.count} activities on ${activity.date}`,
                                    style: { 
                                       fill: activity.count === 0 ? '#111' : undefined,
                                    },
                                 })
                              }
                           />
                           {/* Tooltip dirender di luar SVG */}
                           <Tooltip id="github-tooltip" className=' text-white px-3 py-2 inset-shadow-md-cus ' style={{ backgroundColor:"#111", borderRadius: '16px' }} />
                        </div>
                        {/* <a href="" className=" bg-yellow-500 text-gray-800 text-base font-semibold px-6 py-2 rounded-xl">
                           <FileUser className="inline-block group-hover:visible invisible group- group-hover:animate-slide-from-right transition-all ease-in-out" size={20}/> <span className="animate-slide-from-right">M</span><span className="animate-slide-from-bottom">y</span> CV
                        </a> */}
                        <div className="flex flex-col gap-2 w-full">
                           <h1>Currently Learning</h1>
                           <div className="w-full h-full bg-dark-light p-3 flex items-center justify-center rounded-md inset-shadow-sm-cus">
                              <ul className='list-disc list-inside absolute place-content-center'>
                                 <li>Flutter</li>
                                 <li>React</li>
                                 <li>Framer Motion</li>
                                 <li>Optimizion website</li>
                              </ul>
                           </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                           <h1>Repositories</h1>
                           <div className="w-full h-full bg-dark-light p-3 flex items-center justify-center rounded-md inset-shadow-sm-cus">
                              <p className='text-center text-2xl font-bold tracking-wider'>35+</p>
                           </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                           <h1>Spesilization</h1>
                           <div className="w-full h-full bg-dark-light p-3 flex items-center justify-center rounded-md inset-shadow-sm-cus">
                             <p className='text-center text-2xl font-bold tracking-wider'>Frontend</p>
                           </div>
                        </div>
                     </div>
                  </div>
                 <h1 className='text-xl font-medium mt-5'>Experience</h1>
               </div>
         </div>
      </SectionWrapper>
   )
}