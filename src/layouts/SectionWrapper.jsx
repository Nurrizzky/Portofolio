export default function SectionWrapper({ children, id, style }) {
   return (
      <section id={id} className={`min-h-screen w-full px-10 ${style}`}>
         {children}
      </section>
   )
}