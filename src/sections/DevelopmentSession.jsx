export default function DevelopmentSession() {
   return (
      <div className='h-screen text-white flex justify-center items-center relative '>
         <div className=" pb-5 mx-5 flex space-x-3 items-center justify-center animate-fade-in">
          <Settings className='animate-spinner mb-1' />
          <p className='text-4xl max-md:text-2xl font-medium animate-slide-from-right '>Under Development.</p>
        </div>
      </div>
   )
}