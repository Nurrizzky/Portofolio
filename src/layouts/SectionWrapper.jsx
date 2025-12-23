export default function SectionWrapper({ children, id, style, useSvh = false }) {
   const height = useSvh ? "min-h-svh md:h-screen" : "lg:h-screen";
   return (
      <section id={id} className={`${height} bg-[#111] w-full px-50 py-10 overflow-hidden ${style} max-sm:px-5`}>
         {children}
      </section>
   )
}