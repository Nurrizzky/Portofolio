import gradientPoinTop from '../../assets/images/gradientTop.png';
import gradientPoinBottom from '../../assets/images/gradientBottom.webp';

export default function BackgroundGradient() {
   return (
      <>
         <div className="fixed w-full h-full -z-10 inset-0 box-border bg-[#111]">
            {/* <img src={gradientPoinTop} alt="images" loading="eager" fetchPriority="high" className='opacity-[0.5] absolute w-full top-0 right-0 pointer-events-none' />
            <img src={gradientPoinBottom} alt="image" loading="eager" fetchPriority="high" className='opacity-[0.5] absolute w-full  bottom-0 left-0 pointer-events-none' /> */}
         </div>
      </>
   )
}