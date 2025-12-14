export default function SectionWrapper({ children, id, style }) {
   return (
      <section id={id} className={`min-h-dvh w-full px-10 ${style}`}>
         {children}
      </section>
   )
}