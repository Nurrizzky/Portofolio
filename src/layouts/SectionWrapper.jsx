export default function SectionWrapper({ children, id, style, useSvh = false }) {
   const height = useSvh ? "min-h-svh" : "min-h-screen";
   return (
      <section id={id} className={`${height} w-full px-10 ${style}`}>
         {children}
      </section>
   )
}