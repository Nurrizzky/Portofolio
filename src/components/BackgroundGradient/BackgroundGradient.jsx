import gradientPoinTop from '../../assets/images/gradientTop.png';
import gradientPoinBottom from '../../assets/images/gradientBottom.webp';

export default function BackgroundGradient() {
   return (
      <>
         <div className="fixed w-full h-full -z-10 inset-0 box-border bg-[#111]">
            <div className="absolute -bottom-40 -left-40 animate-rotates h-[600px] w-[600px] rounded-full blur-[200px]" />
            {/* <div class="absolute bottom-0 left-1/4 animate-rotates2 h-[400px] w-[400px] rounded-full bg-orange-500 blur-[150px]" /> */}
            {/* <img src={gradientPoinTop} alt="images" loading="eager" fetchPriority="high" className='opacity-[0.5] absolute w-full top-0 right-0 pointer-events-none' />
            <img src={gradientPoinBottom} alt="image" loading="eager" fetchPriority="high" className='opacity-[0.5] absolute w-full  bottom-0 left-0 pointer-events-none' /> */}
         </div>
      </>
   )
}