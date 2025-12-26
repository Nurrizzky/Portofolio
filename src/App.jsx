import { useState, useEffect, lazy, Suspense } from 'react'
import { ReactTyped } from 'react-typed';
import BottomBar from './components/BottomBar/BottomBar';
import Loading from './components/Loading/Loading';
import ReactLenis, { useLenis } from 'lenis/react';

const DevelopmentPage = lazy(() => import('./sections/DevelopmentSession.jsx'));
const Hero = lazy(() => import('./sections/HeroSection.jsx'));
const AboutPage = lazy(() => import('./sections/About.jsx'));
const ExperiencePage = lazy(() => import('./sections/Experience.jsx'))
const Project = lazy(() => import('./sections/Project.jsx'));
const Certificate = lazy(() => import('./sections/Certificate.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));

function App() {
  const[showWelcome, setShowWelcome] = useState(true);
  const[isFadingOut, setIsFadingOut] = useState(false);
  const[showBottomBar, setBottomBar] = useState(false);

  useLenis(({ scroll }) => {
    const show = scroll >= innerHeight * 0.8;

    if (showWelcome) {
      return;
    }

    if (show !== showBottomBar) {
      setBottomBar(true);
    } else {
      setBottomBar(false);
    }
  }, [showWelcome]);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("seenWelcome");

    if (hasSeenWelcome) {
      setShowWelcome(false);
      return;
    }
    // mulai fade out setelah
    const timeToFade = setTimeout(() => {
      setIsFadingOut(true);
    }, 4000);
    // hide welcome setelah fade out selesai 
    const timeToHide = setTimeout(() => {
      setShowWelcome(false);
      sessionStorage.setItem("seenWelcome", "true");
    }, 5000);
    return () => {
      clearTimeout(timeToFade);
      clearTimeout(timeToHide);
    };

  }, []);

  if (showWelcome) {
    return (
      <div className={`flex items-center justify-center h-screen w-full bg-cover font-Onest bg-[#111]`}>
        <ReactTyped
          strings={[
            `Hello 🖐️`,
            "Welcome to my portofolio.👌",
          ]}
          typeSpeed={50}
          backSpeed={40}
          className={`text-white text-3xl tracking-tighter px-5 font-bold ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}
        />
      </div>
    );
  }

  return (
    <ReactLenis root>
      {/* <Hero /> */}
      <main className='font-Onest transition-colors duration-300 dark:text-white light:text-dark-light w-full h-full flex flex-col items-center z-50 justify-center'>
        <Suspense fallback={<Loading />}>
          {/* <AboutPage /> 
          <ExperiencePage />
          <Project />
          <Certificate />
          <Contact /> */}
          <DevelopmentPage />
        </Suspense> 
        <BottomBar isVisible={showBottomBar}  />
      </main>
    </ReactLenis>
  )
}

export default App  
