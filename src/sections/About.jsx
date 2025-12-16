import { Download } from "lucide-react";
import SectionWrapper from "../layouts/SectionWrapper";
import profile from "../assets/images/pp.jpeg";
import BadgeTechWrapper from "../layouts/BadgeTechWrapper";

export default function About() {
   return (
      <SectionWrapper id={"about"} useSvh={true}>
         <h1 className="text-4xl">About me.</h1>
         <div className="mt-10 h-full flex justify-between space-x-10 max-sm:flex-col max-sm:items-center ">
            <div className="h-full w-[35%] max-sm:w-fit bg-dark-light/50 p-7 max-sm:mx-auto inset-shadow-md-cus ">
               <img src={profile} alt="" className="w-xs rounded-2xl inset-shadow-lg-cus brightness-110" />
               <h2 className="text-xl mt-5 font-semibold">Spesialization</h2>
               <h3 className="text-lg mb-10 ">Front-end Developer</h3>
               <h2 className="text-xl font-semibold">Address</h2>
               <h3 className="text-lg ">Bogor, Jawa barat, Indonesia</h3>
               <a href="#contact" className="mt-5 w-full py-2 px-3 mx-auto inline-block animate-rotates rounded-2xl text-black font-semibold">Let's Talk</a>
            </div>

            <div className="text-left max-sm:text-left w-full bg-dark-light p-10  inset-shadow-md-cus overflow-hidden">
               <h1 className="text-2xl font-bold tracking-wide">Muhammad Nur Rizky || Front-end developer</h1>
               <p className="text-lg text-gray-200 mt-5">Siswa jurusan PPLG di SMK Wikrama Bogor dengan spesialisasi pengembangan Front-End. Memiliki keahlian teknis dalam membangun aplikasi web responsif menggunakan React.js dan Tailwind CSS, serta pengembangan mobile dengan Flutter. Terbiasa bekerja dengan Linux environment dan memiliki semangat tinggi untuk menciptakan antarmuka pengguna yang modern dan fungsional</p>
               
               <h2 className="text-2xl my-5 font-semibold text-left">Tech i was used</h2>
               <BadgeTechWrapper scrollDirection={"animate-scrollXtoRight"} moreSpace={true} />
               <BadgeTechWrapper scrollDirection={"animate-scrollXtoLeft"} />
               <BadgeTechWrapper scrollDirection={"animate-scrollXtoRight"} />
            </div>
         </div>
      </SectionWrapper>
   )
}