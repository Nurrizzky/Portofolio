export default function SectionWrapper({ children, id, style, useSvh = false }) {
   const height = useSvh ? "min-h-svh" : "h-screen";
   return (
      <section id={id} className={`${height} w-full px-50 py-10 overflow-hidden ${style} max-sm:px-5`}>
         {children}
      </section>
   )
}