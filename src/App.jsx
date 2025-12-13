import { Download, Settings } from 'lucide-react';
import { useState, useEffect, lazy, Suspense } from 'react'
import { ReactTyped } from 'react-typed';
import BottomBar from './components/BottomBar/BottomBar';
import HeroSection from './sections/HeroSection';
import Loading from './components/Loading/Loading';

function App() {
  const[showWelcome, setShowWelcome] = useState(true);
  const[isFadingOut, setIsFadingOut] = useState(false);

  const[showBottomBar, setBottomBar] = useState(false);

  // useEffect(() => {
  //   const hasSeenWelcome = sessionStorage.getItem("seenWelcome");

  //   if (hasSeenWelcome) {
  //     setShowWelcome(false);
  //     return;
  //   }
  //   // mulai fade out setelah
  //   const timeToFade = setTimeout(() => {
  //     setIsFadingOut(true);
  //   }, 4000);
  //   // hide welcome setelah fade out selesai 
  //   const timeToHide = setTimeout(() => {
  //     setShowWelcome(false);
  //     sessionStorage.setItem("seenWelcome", "true");
  //   }, 5000);
  //   return () => {
  //     clearTimeout(timeToFade);
  //     clearTimeout(timeToHide);
  //   };

  // }, []);

  // useEffect(() => {
  //   if (showWelcome) {
  //     return;
  //   }

  //   const handleScroll = () => {
  //     if (window.scrollY >= innerHeight * 0.9) {
  //       setBottomBar(true);
  //     } else {
  //       setBottomBar(false);
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);

  // }, [showWelcome])

  // if (showWelcome) {
  //   return (
  //     <div className={`flex items-center justify-center h-screen w-full bg-cover font-Onest bg-[#111] ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}>
  //       <ReactTyped
  //         strings={[
  //           `Hello 🖐️`,
  //           "Welcome to my portofolio.👌",
  //         ]}
  //         typeSpeed={50}
  //         backSpeed={40}
  //         className={`text-white text-3xl tracking-tighter px-5 font-bold ${isFadingOut ? "animate-fade-out" : ""}`}
  //       />
  //     </div>
  //   );
  // }
  
  const Hero = lazy(() => import('./sections/HeroSection.jsx')) 

  return (
    <>
      <main>
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense> 
      </main>
    </>
  )
}

export default App  
